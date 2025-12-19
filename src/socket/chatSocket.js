const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Message = require("../models/Message");

const chatSocket = (io) => {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.userId = decoded.userId;
      next();
    } catch (err) {
      next(new Error("Authentication error"));
    }
  });

  io.on("connection", async (socket) => {
    console.log("User connected:", socket.userId);

    await User.findByIdAndUpdate(socket.userId, { isOnline: true });

    socket.on("send_message", async ({ receiverId, message }) => {
      const newMessage = await Message.create({
        sender: socket.userId,
        receiver: receiverId,
        message
      });

      io.emit(`receive_message_${receiverId}`, newMessage);
    });

    socket.on("disconnect", async () => {
      await User.findByIdAndUpdate(socket.userId, { isOnline: false });
      console.log("User disconnected:", socket.userId);
    });
  });
};

module.exports = chatSocket;

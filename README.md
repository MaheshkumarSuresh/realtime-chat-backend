Real-Time One-to-One Chat Backend (Socket.IO)

Overview
This project is a backend-only real-time one-to-one chat application built using Node.js and Socket.IO.
It supports JWT-based socket authentication, real-time messaging, online/offline user status,
message persistence, and chat history retrieval.
MongoDB is used as the database and MongoDB Compass is used for database management.

Tech Stack
- Node.js
- Express.js
- Socket.IO
- MongoDB (MongoDB Compass)
- Mongoose
- JWT Authentication

Features
- JWT authenticated Socket.IO connections
- Real-time one-to-one messaging
- Online and offline user status tracking
- Messages stored in MongoDB
- Fetch chat history between users
- Backend only

Project Structure
realtime-chat-backend/
├── src/
│   ├── config/db.js
│   ├── models/User.js
│   ├── models/Message.js
│   ├── socket/chatSocket.js
│   ├── routes/chatRoutes.js
│   └── server.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

Setup Instructions
1. Clone the repository
2. Install dependencies using npm install
3. Create a .env file with PORT, MONGO_URI and JWT_SECRET
4. Start server using npm run dev

MongoDB Setup Using Compass
- Open MongoDB Compass
- Connect using the same MONGO_URI
- Create database realtime_chat 
- Create users collection
- Insert users with username and isOnline fields

JWT Token Generation
- Create generateToken.js
- Use jsonwebtoken to sign token with userId

Socket Authentication
- Pass JWT token using socket auth object

Socket Events
send_message – sends message to receiver
receive_message_<userId> – receives message

Fetch Chat History API
GET /chat/history/:user1Id/:user2Id

Online / Offline Status
User status is updated automatically on socket connect and disconnect.

Testing Tools
- MongoDB Compass
- Socket.IO Client Tool
- Postman

Notes
This has been developed by Maheshkumar for Back End Developer Role


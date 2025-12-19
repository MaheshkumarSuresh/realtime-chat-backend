# Real-Time One-to-One Chat Backend

## Overview
This project is a **backend-only real-time one-to-one chat application** built using **Node.js and Socket.IO**.  
It supports **JWT-based socket authentication**, **real-time messaging**, **online/offline user status tracking**, **message persistence**, and **chat history retrieval**.

This project was developed as part of a **Backend Developer assignment**.

---

## Tech Stack
- Node.js
- Express.js
- Socket.IO
- MongoDB (managed using MongoDB Compass)
- Mongoose
- JWT (JSON Web Token)

---

## Features
- JWT authenticated Socket.IO connections
- Real-time one-to-one messaging
- Online and offline user status tracking
- Messages stored in MongoDB
- Fetch chat history between users
- Backend only (no frontend)

---

## Project Structure

```
realtime-chat-backend/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js
│   ├── socket/
│   │   └── chatSocket.js
│   ├── routes/
│   │   └── chatRoutes.js
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/MaheshkumarSuresh/realtime-chat-backend.git
cd realtime-chat-backend
```

---

### 2. Install Dependencies
```bash
npm install
```

---

### 3. Environment Variables
Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=mysecretkey
```

> **Note:** The `.env` file is ignored using `.gitignore` and should not be committed.

---

### 4. Start the Server
```bash
npm run dev
```

Expected output:
```
MongoDB connected
Server running on port 5000
```

---

## MongoDB Setup (Using MongoDB Compass)

1. Open **MongoDB Compass**
2. Connect using the same connection string as `MONGO_URI`
3. Create database: `realtime_chat` (or `test`)
4. Create collection: `users`
5. Insert sample users:

```json
{
  "username": "userA",
  "isOnline": false
}
```

```json
{
  "username": "userB",
  "isOnline": false
}
```

Copy the `_id` values for JWT generation.

---

## JWT Token Generation

Create a temporary file named `generateToken.js`:

```js
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userId = "<PASTE_USER_ID_HERE>";

const token = jwt.sign(
  { userId },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

console.log(token);
```

Run:
```bash
node generateToken.js
```

Generate one token per user.

---

## Socket Authentication

Socket.IO connections are authenticated using JWT.

### Auth Payload
```json
{
  "auth": {
    "token": "<JWT_TOKEN>"
  }
}
```

---

## Socket Events

### Send Message
**Event:** `send_message`

```json
{
  "receiverId": "<receiver_user_id>",
  "message": "Hello from User A"
}
```

---

### Receive Message
**Event:**
```
receive_message_<userId>
```

The receiver listens to this event to receive real-time messages.

---

## Fetch Chat History API

### Endpoint
```http
GET /chat/history/:user1Id/:user2Id
```

### Description
Returns all messages exchanged between two users, sorted by timestamp.

---

## Online / Offline User Status
- User is marked **online** when socket connects
- User is marked **offline** when socket disconnects
- Status is stored in MongoDB in the `users` collection (`isOnline` field)

---

## Testing Tools Used
- MongoDB Compass
- Socket.IO Client Tool
- Postman

---

## Notes
- This is a **backend-only** project
- No frontend/UI is included
- Designed for backend developer assessment

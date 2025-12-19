require("dotenv").config();
const jwt = require("jsonwebtoken");

const userId = "6945576383968f286a0ff5f9";

const token = jwt.sign(
  { userId },
  process.env.JWT_SECRET,
  { expiresIn: "1h" }
);

console.log("\nJWT TOKEN:\n");
console.log(token);

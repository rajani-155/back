require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const connectDB = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");
const {sendEmail} = require("./sendEmail");
const mongoose = require('mongoose');
const path = require("path");

// Connect to the database
connectDB();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Route setup
app.use("/api/portfolio", portfolioRoute);
app.post("/api/sendEmail", (req, res) => {
  const {
    name,
    email,
    message
  } = req.body;
  const subject = `Contact Form Submission from ${name}`;
  const text = `You have a new message from ${name} (${email}):\n\n${message}`;
  sendEmail(email, subject, text);
  res.send("Message sent successfully");
});
app.use('/auth', require('./routes/auth'));



app.get("/", (req, res) => {
app.use(express.static(path.resolve(__dirname, "client", "build")));
res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
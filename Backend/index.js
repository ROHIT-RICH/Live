var express = require("express");
var app = express();
var port = 4000;
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require("path");

// Enable CORS and cookies first
const allowedOrigins = [
  'http://localhost:3000',
  'https://live-lp4l.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  },
  credentials: true
}));
// Parse JSON bodies
app.use(express.json());

// Parse cookies
app.use(cookieParser());

// Connect to database
require('./Connenction/conn');

// Register API routes before static files
const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const CommentRoutes = require('./Routes/comment');

app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);
app.use('/commentApi', CommentRoutes);

// // Serve frontend static files after API routes
app.use(express.static(path.join(__dirname, "client")));

// Serve index.html for any other route (React router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(port, () => {
  console.log("Server Running on Port", port);
});

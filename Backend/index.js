var express = require("express");
var app = express();
var port = 4000;
const cookieParser = require('cookie-parser');
const cors = require('cors');
// const path = require("path");

// Enable CORS and cookies first
app.use(cors({
    origin: 'http://localhost:3000', // your frontend URL
    credentials: true // to use cookies
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
// app.use(express.static(path.join(__dirname, "client")));

// // Serve index.html for any other route (React router)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "index.html"));
// });

app.listen(port, () => {
  console.log("Server Running on Port", port);
});

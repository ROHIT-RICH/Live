const mongoose = require("mongoose");

mongoose
.connect('mongodb+srv://rvaishya69:Internshala@cluster0.t7dof.mongodb.net/youtubeBackend') //ADD YOUR CONNECTION
.then(()=> console.log('DataBase Connected')).catch(err => {
    console.log(err)
});
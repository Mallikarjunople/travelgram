//dependencies
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser=require('body-parser');
const postsRoute = require('./routes/posts');
var socket = require('socket.io');

require('dotenv/config');

//require the route handlers
app.use(cors());
app.use(bodyParser.json());

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true},function(){
  console.log("connected to database");
});


//routes
app.use('/posts',postsRoute);


app.get('/',function(req,res){
  res.send("we are at home");
});


server = app.listen(5000,function(){
  console.log("Server started at port 5000");
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
      io.emit('RECEIVE_MESSAGE', data);
  })
});
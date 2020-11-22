//dependencies
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser=require('body-parser');
const postsRoute = require('./routes/posts');
const userRoute = require('./routes/users');
const blogRoute = require('./routes/blogs');
var socket = require('socket.io');
const morgan = require('morgan');

require('dotenv/config');

//require the route handlers
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

//connect to db
mongoose.connect(process.env.DB_CONNECTION,{ 
  useCreateIndex: true,useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false},function(){
  console.log("connected to database");
});

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Control-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});



//routes
//app.use('/posts',postsRoute);
app.use('/users',userRoute);
app.use('/blogs',blogRoute);


app.use((req,res,next)=>{
  const error = new Error('Not Found');
  error.status=404;
 
  next(error);
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
      error:{
          message : error.message
      }
  })
})


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

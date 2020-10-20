//dependencies
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser=require('body-parser');
const postsRoute = require('./routes/posts');
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



app.listen(5000,function(){
  console.log("Server started at port 5000");
});

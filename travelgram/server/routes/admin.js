const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt_decode = require('jwt-decode');

router.get('/',(req,res,next)=>{
res.send('Admin page');
});




module.exports=router;
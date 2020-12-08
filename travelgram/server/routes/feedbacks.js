const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const checkAuth = require("../middleware/check-auth");
const feedBack = require("../models/feedback");
const mongoose = require("mongoose");

router.post("/", checkAuth, async (req, res) => {
  const feedback = new feedBack({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const savedPost = await feedback.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
=======
const mongoose = require('mongoose');

const checkAuth = require('../middleware/check-auth');
const feedBack = require('../models/feedback');


router.post('/',checkAuth,async(req,res)=>{
    const feedback = new feedBack({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        description:req.body.description
    });

    try{
        const savedPost = await feedback.save();
        res.json(savedPost);
    }catch(err){
        res.json({ message : err});
    }

   
>>>>>>> ba85b751b93fb81d9be0d0b7878047133501334a
});

module.exports = router;

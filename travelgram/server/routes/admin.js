const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const jwt_decode = require('jwt-decode');
const PBlog = require('../models/pendingBlog');

router.get('/blogreq',async (req,res,next)=>{
    try{
      const allpendingnewblogs = await PBlog.aggregate([
          { $match: { flag: 0}}
    ]);

    const allpendingupdatedblogs = await PBlog.aggregate([
        { $match: { flag: 2}}
  ]);
    
    var allpendingblogs = [];
    for(var i=0;i<allpendingnewblogs.length;i++){
        allpendingblogs.push(allpendingnewblogs[i]);
    }

    for(var i=0;i<allpendingupdatedblogs.length;i++){
        allpendingblogs.push(allpendingupdatedblogs[i]);
    }

    res.status(200).json({
        count:allpendingblogs.length,
        blogs:allpendingblogs.map(allpendingblogs => {
            return{
                _id: allpendingblogs._id,
                user:allpendingblogs.user,
                Body:allpendingblogs.Body,
                Location:allpendingblogs.Location,
                Title:allpendingblogs.Title,
                flag:allpendingblogs.flag,
                Pictures:allpendingblogs.Pictures,
                date:allpendingblogs.date,
                request:{
                    type:'GET',
                    url:'http://localhost:5000/blogs/'+allpendingblogs._id
                }
            }
        })
        
    }); 
    }catch(err){
        console.log(err);
        res.status(500).json({message:err});
    }
  });

  router.get('/blogreq/:blogId',async (req,res,next)=>{
    try{
        const blog = await PBlog.findById(req.params.blogId);
    res.status(200).json(blog);
    }catch(err){
        res.json({message:err});
    }
    
});

router.patch('/blogreq/:blogId',async (req,res) => {
    try{
        const updatedBlog = await PBlog.updateOne(
            {_id:req.params.blogId},
            { $set: { flag : req.body.flag}}
        );

        const pblog = await PBlog.findById(req.params.blogId);
        console.log(pblog);
        if(pblog.flag == 0){
            await PBlog.findByIdAndDelete(pblog._id,function(err,docs){
                if(err){
                    
                    res.status(500).json({
                        message:'error deleting blog',
                        error:err
                    })
                }else{
                    
                    res.status(200).json({
                        message:'inappropriate content,blog deleted',
                        doc:pblog,
                        request:{
                            type:'POST',
                            url:'http://localhost:5000/blogs'
                        }
                    });
                }
            });
        }else{
            const findUser= await User.findById(pblog.user);
            console.log(findUser);

            findUser.blogs.push(pblog._id);
                await findUser.save();
                console.log(findUser);

            res.status(200).json({
                message:"blog saved in db",
                bog:pblog
            });
        }
        
            
        
    }catch(err){
        res.json({ message : err});
    }  
});




module.exports=router;
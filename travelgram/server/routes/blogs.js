const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

const Blog = require('../models/blog');
const checkAuth = require('../middleware/check-auth');


router.get('/',async(req,res,next)=>{
    
    try{
        const allBlogs =await Blog.find().populate('user','name email');
        res.status(200).json({
            count:allBlogs.length,
            blogs:allBlogs.map(allBlogs => {
                return{
                    _id: allBlogs._id,
                    user:allBlogs.user,
                    Body:allBlogs.Body,
                    Location:allBlogs.Location,
                    Title:allBlogs.Title,
                    Pictures:allBlogs.Pictures,
                    date:allBlogs.date,
                    request:{
                        type:'GET',
                        url:'http://localhost:5000/blogs/'+allBlogs._id
                    }
                }
            })
            
        });
    }catch(err){
        res.status(500).json({
            error:err
        });
    }
});


router.post('/',checkAuth,async(req,res,next)=>{
    try{
        const findUser= await User.findById(req.body.user);
        if(!findUser){
            return res.status(404).json({
                message:'user not found'
            });
        }
        const blog= new Blog({
            _id: new mongoose.Types.ObjectId(),
            user:req.body.user,
            Body:req.body.Body,
            Location:req.body.Location,
            Title:req.body.Title,
            Pictures:req.body.Pictures,
            date:req.body.date
        });
    
        try{
            const createdBlog = await blog.save();
            console.log(createdBlog);
            res.status(201).json({
                message:'Blog stored',
                newBlog:createdBlog,
                request:{
                    type:'GET',
                    url:'http://localhost:5000/blogs/'+createdBlog._id
                }
            });
        }catch(err){
            console.log(err);
            res.status(500).json({
                error:err
            });
        }

    }catch(err){
        res.status(500).json({
            message:'User not found',
            error:err
        })
    }
   

    

    
});

router.get('/:blogId',checkAuth,async(req,res,next)=>{
    try{
        const findBlog = await  Blog.findById(req.params.blogId).populate('user');
        if(!findBlog){
            return res.status(404).json({
                message:'Blog not found'
            });
        }
        res.status(200).json({
            blog:findBlog,
            request:{
                type:'GET',
                url:'http://localhost:5000/blogs'
            }
        });
    }catch(err){
        res.status(500).json({
            error:err
        });
    }
    

});


router.delete('/:blogId',checkAuth,async (req,res,next)=>{
    try{
        const removedBlog = await Blog.remove({_id:req.params.blogId});
        res.status(200).json({
            message:'Blog deleted',
            request:{
                type:'POST',
                url:'http://localhost:5000/blogs'
            }
        });
    }catch(err){
        res.json({ message : err});
    }
});

module.exports=router;
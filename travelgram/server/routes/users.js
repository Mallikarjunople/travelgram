const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const jwt_decode = require('jwt-decode');


router.get('/',async (req,res,next)=>{
    try{
      const allUsers = await User.find().select('name email phone _id password');
      const response = {
          count: allUsers.length,
          users:allUsers.map(allUsers => {
              return {
                  name:allUsers.name,
                  email:allUsers.email,
                  phone:allUsers.phone,
                  password:allUsers.password,
                  _id:allUsers._id,
                    request:{
                        type:'GET',
                        url:"http://localhost:5000/users/"+allUsers._id
                    }
              }
          })
      };
      res.status(200).json(response);  
    }catch(err){
        console.log(err);
        res.status(500).json({message:err});
    }
  });


  router.post('/signup',(req,res,next)=>{
    User.find({email:req.body.email})
    .exec()
    .then(user => {
        if(user.length >= 1){
            return res.status(409).json({
                message:"Mail exists"
            });
        }else{
        
            bcrypt.hash(req.body.password,10,(err,hash)=> {
                if(err){
                    return res.status(500).json({
                        error :err
                    })
                }else{
                    const user = new User({
                        _id:new mongoose.Types.ObjectId(),
                        name:req.body.name,
                        email:req.body.email,
                        phone:req.body.phone,
                        password:hash,
                        profilePhoto:req.body.profilePhoto
                    });
                    user
                    .save()
                    .then(result => {
                        console.log(result);
                        res.status(201).json({
                            message:'User created'
                        });
                    })
                    .catch( err => {
                        console.log(err);
                        res.status(500).json({
                        error:err
                        });
                    });
                }
            });
        }
    })
    
    
});


router.post('/login',async(req,res,next)=>{
    console.log(req.body);
    await User.find({email:req.body.email})
    .exec()
    .then(user => {
        if(user.length < 1){
            return res.status(401).json({
                message:"User not found"
            });
        }
    
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(err){
                return res.status(401).json({
                    message:"Password don't match"
                });
            }
            if(result){
                const token = jwt.sign(
                    {
                    email:user[0].email,
                    userId:user[0]._id
                },"secret",
                {
                    expiresIn:"10h"
                }
    
                );
                var decoded = jwt_decode(token);
                return res.status(200).json({
                    message:"Auth successful",
                    token:token,
                    userId:decoded.userId
                });
            }
            res.status(401).json({
                message:'Auth failed'
            });
        });
    })
    .catch(err => {
        console.log(err);
    res.status(500).json({
    error:err
    });
    });
    });


// router.post('/',async(req,res,next)=>{
    
//     const user = new User({
//         _id: new mongoose.Types.ObjectId(),
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         password:req.body.password
//     });

//     try{
//         const newUser = await user.save();
//         res.status(201).json({
//             message:'Created a new User successfully',
//             newUser:{
//                 name:newUser.name,
//                 email:newUser.email,
//                 phone:newUser.phone,
//                 password:newUser.password,
//                 _id:newUser._id,
//                 request:{
//                     type:'GET',
//                     url:"http://localhost:5000/users/"+newUser._id
//                 }
//             }
//         });
//     }catch(err){
//         console.log(err);
//         res.status(500).json({ message : err});
//     }
    

    
// });


router.get('/:userId',checkAuth,async (req,res)=>{
    const id = req.params.userId;
 console.log(req.userData);
if(req.userData.userId === id){
    try{
        const userById = await User.findById(id).select('name email phone _id password blogs');
        console.log(userById);
        if(userById){
            res.status(200).json({
                user:userById,
                request:{
                    type: 'GET',
                    url: 'http://localhost:5000/users'
                }
            });
        }else{
            res.status(404).json({ message:'No valid entry found for provided ID'});
        }
    
    }catch(err){
        console.log(err);
        res.status(500).json({error:err});
    }
}else{

res.status(404).json({
    message:"Not same user"
});

}


   
    
});



router.patch('/:userId',checkAuth,async (req,res,next) => {
    const id = req.params.userId;
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt_decode(token);

    if(req.userData.userId === id){
        const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName]=ops.value;
    }
    try{
        const updatedUser = await User.updateOne(
            {_id:id},
            { $set: updateOps}
        );
        res.status(200).json({
            message:'User updated',
            user:updatedUser,
            request:{
                type:'GET',
                url:'http://localhost:5000/users/'+id
            }
        });
    }catch(err){
        res.status(500).json({ message : err});
    }
    }


      
});

router.delete('/:userId',checkAuth,async (req,res,next)=>{
    const id = req.params.userId;
    const token = req.headers.authorization.split(" ")[1];
    var decoded = jwt_decode(token);
    if(req.userData.userId === id){
        try{
            const removedUser = await User.remove({_id:req.params.userId});
            res.status(200).json({
                message:'User deleted',
                request:{
                    type:'POST',
                    url:'http://localhost:5000/users',
                    body : {
                        name:'String',
                        email:'String',
                        phone:'Number',
                        password:'String'
                    }
                }
                
            });
            
            
        }catch(err){
            console.log(err);
            res.status(500).json({ message : err});
        }
    }


    
});


module.exports=router;
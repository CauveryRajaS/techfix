const express=require('express');
const router=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');
const User=require('../models/user');
const Ticket=require('../models/ticket');

//Register

router.post('/register', ( req, res, next) => {
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        password:req.body.password,
        copy:req.body.copy,
        question:req.body.question,
        answer:req.body.answer
    });
    User.addUser(newUser,(err,user) => {
        if(err) {
            res.json({success:false,msg:'Failed to add user'});
        } 
        else {
            res.json({success:true,msg:'user added successfully'});
        }
    });
});

//Authenticate

router.post('/authenticate', ( req, res, next) => {
    const email=req.body.email;
    const password=req.body.password;

    
    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success:false,msg:'user not found'});
        }
    
        User.comparePassword(password,user.password,(err,isMatch)=> {
            if(err) throw err;
               
            if(isMatch) {
                console.log(user);
                const token =jwt.sign(user.toObject(),config.secret, {
                    expiresIn: 604800
                });

                res.json({
                    success:true,
                    token:'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email:user.email
                    }
                });
            }
            else {
                return res.json({success:false,msg:'wrong password'});
            }
        });
    });
});


router.get('/profile',passport.authenticate('jwt',{session:false}), ( req, res, next) => {
    photo=req.user.email;
    res.json({user: req.user});
    console.log(photo);
});

//User details
router.get('/user',( req, res, next) => {
    console.log('getting user info');
    User.find().
    exec(function(err,user) {
        if(err) {
            console.log('Error getting user');
            res.json({success:false,msg:'Failed to read user info'});
        }
        else {
            res.json(user);
        }
    });
});

//Deleting user
router.delete('/user/:email',( req, res, next) => {
    console.log('deleting user');
    User.remove({email:req.params.email}).
    exec(function(err,rep) {
        if(err) {
            console.log('Error deleting user');
            res.json({success:false,msg:'Failed to delete user'});
        }
        else {
            console.log(rep);
            res.json({success:true,msg:'User deleted successfully'});
        }
    });
});

//updating profile
router.put('/profile/:email',( req, res, next) => {
    console.log('updating full profile');
    User.findOne({email:req.params.email}).
    exec(function(err,profile) {
        if(err) {
            console.log('Error updating profile');
            res.json({success:false,msg:'Failed to update profile info'});
        }
        else {
            profile.name=req.body.name || profile.name;
            profile.question=req.body.question || profile.question;
            profile.answer=req.body.answer || profile.answer;
            profile.password=req.body.password || profile.password;
            profile.copy=req.body.copy || profile.copy;
            profile.contact=req.body.contact || profile.contact;
            console.log(profile);
            if(req.body.password!=undefined) {
                User.addUser(profile,(err,ent) => {
                    if(err) {
                        console.log(err);
                        res.json({success:false,msg:'Failed to update profile entries'});
                    } 
                    else {
                        res.json({success:true,msg:'full profile with password entries updated successfully'});
                    }
                });
            }
            else {
                User.updateUser(profile,(err,ent) => {
                    if(err) {
                        console.log(err);
                        res.json({success:false,msg:'Failed to update profile entries'});
                    } 
                    else {
                        res.json({success:true,msg:'full profile entries updated successfully'});
                    }
                });
            }
        }
    });
});

//admin getting all tickets
router.get('/ticket',( req, res, next) => {
    console.log('getting all ticket info');
    Ticket.find().
    exec(function(err,feeds) {
        if(err) {
            console.log('Error getting all ticket info');
            res.json({success:false,msg:'Failed to read all ticket info'});
        }
        else {
            res.json(feeds);
        }
    });
});

//client getting all tickets
router.get('/ticket/:email',( req, res, next) => {
    console.log('getting all ticket info');
    Ticket.find({email:req.params.email}).
    exec(function(err,feeds) {
        if(err) {
            console.log('Error getting all ticket info');
            res.json({success:false,msg:'Failed to read all ticket info'});
        }
        else {
            res.json(feeds);
        }
    });
});

router.post('/ticket', ( req, res, next) => {
    let newTicket = new Ticket({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        problem:req.body.problem,
        description:req.body.description,
        priority:req.body.priority,
        date:req.body.date
    });
    Ticket.addTicket(newTicket,(err,feed) => {
        if(err) {
            res.json({success:false,msg:'Failed to add ticket'});
        } 
        else {
            res.json({success:true,msg:'Ticket added successfully'});
        }
    });
});

router.put('/ticket/:email/:problem',( req, res, next) => {
    console.log('updating ticket');
    Ticket.findOne({email:req.params.email,problem:req.params.problem}).
    exec(function(err,ticket) {
        if(err) {
            console.log('Error updating ticket');
            res.json({success:false,msg:'Failed to update ticket info'});
        }
        else {
            ticket.priority=req.body.priority || ticket.priority;
            console.log(ticket);
            Ticket.addTicket(ticket,(err,feed) => {
                if(err) {
                    console.log('error');
                    res.json({success:false,msg:'Failed to update ticket'});
                } 
                else {
                    console.log('no eror');
                    res.json({success:true,msg:'Ticket updated successfully'});
                }
            });
        }
    });
});

router.delete('/ticket/:email/:problem',( req, res, next) => {
    console.log('deleting ticket');
    Ticket.remove({email:req.params.email,problem:req.params.problem}).
    exec(function(err,rep) {
        if(err) {
            console.log('Error deleting ticket');
            res.json({success:false,msg:'Failed to delete ticket'});
        }
        else {
            console.log(rep);
            res.json({success:true,msg:'Ticket deleted successfully'});
        }
    });
});

module.exports=router;
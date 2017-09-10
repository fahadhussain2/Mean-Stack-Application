const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const newHut = require('../models/huts');
const config = require('../config/database');


// Registering a user
router.post('/register', function(req, res, next){
    // res.send('Register');
    // console.log(req.body.fname)
    var newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,        
        email: req. body.email,
        password: req.body.passwordfields.pass
    });

    // console.log(newUser);

    User.getUserByEmail(newUser.email,(err, user)=>{
        if (err) throw err;
         if(!user){
            User.addUser(newUser, (err, user) =>{
                if(err ){
                    res.json({
                    success: false,
                    msg: 'Failed to register user'
                    })
                }

                else{
                    res.json({
                    success: true,
                    msg: 'User registration is successful'
            })
        }
    })
         }
         else{
                res.json({
                success: false,
                msg: 'User already exist'
            })
        }
    })

    
})

// Authenticate
router.post('/authenticate', function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;
    // console.log('credentials',email, password)
    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: "User not found"})
        }

        User.comparePassword(password, user.password, (err, isMatch)  => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 40000
                })

                res.json({
                    success: true,
                    token: 'JWT'+token,
                    user:{
                        id: user._id,
                        name: user.name,
                        fname: user.fname,
                        email: user.email
                    }
                })
            }
            else{
                res.json({success: false, msg:"Wrong Password"});
            }
        })
    })
    // res.send('Authenticate');
})

// Profile
// router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next)=> {
//     res.send('profilsse');
//     res.json({user: req.user})
// })



module.exports = router;
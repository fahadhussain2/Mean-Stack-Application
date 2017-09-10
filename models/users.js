const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');     // this module is used for password encrytpion
const config = require('../config/database');

// User schema

const UserSchema = mongoose.Schema({
    fname:{
        type: String
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});


const User = module.exports = mongoose.model('User', UserSchema); 

// module.exports.getUserById = function(id, callback){
//     User.findById(id, callback)
// }

module.exports.getUserByEmail = function(email, callback){
    const query = {email: email}
    User.findOne(query, callback)
}

module.exports.validateUser = function(newUser){
    const query = {email: newUser.email};
    User.findOne(query, (err, user)=>{
        if(err) throw err;
        
        else{
            console.log('user exist')
        }
    //     else if(!user){
    //         bcrypt.genSalt(10, (err, salt) =>{
    //     bcrypt.hash(newUser.password, salt, (err, hash)=>{
    //         if(err) throw err;
    //         newUser.password = hash;
    //         newUser.save(callback)
    //         return true
    //         console.log('user exit')
    //     })
    // })
    //     }

    //     else{
    //         return false;
    //         console.log('user exist')
    //     }
    })
}

// module.exports.a = 'fahad';

module.exports.addUser = function(newUser, callback){
    const query = {email: newUser.email};
            bcrypt.genSalt(10, (err, salt) =>{
            bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback)
        })
    })

    
}

module.exports.comparePassword = function(userPassword, hash, callback){
    bcrypt.compare(userPassword, hash, (err, isMatch)=>{
        if(err) throw err;
        callback(null, isMatch)
    })
}

// module.exports.fahad = "erer";
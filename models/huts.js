const mongoose = require('mongoose');
const config = require('../config/database');


const hutSchema = mongoose.Schema({
    user:{
        type: String
    },
    name:{
        type: String,
        required: true
    },
    unit:{
        type: String,
        required: true
    },
    rooms:{
        type: Number,
        required: true
    },
    maxPersonAllowed:{
        type: String,
        required: true
    },
    address:{
        type: String,
        require: true
    },
    location:{
        type: String,
        required: true
    },
    latitude:{
        type:Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    rent:{
        type:Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    imgPath:[],
    bookedDates:[],
    reviews:[]
});

const hut = module.exports = mongoose.model('hut', hutSchema); 

//ADDING HUTS ON MONGODB
module.exports.addHut = function(newHut, callback){
    console.log('check', newHut);
    newHut.save(callback);
}
//GETTING ALL HUTS
module.exports.getHuts = function(callback){
    hut.find(callback)
}

//GETTING HUTS BY ID
module.exports.updateHut = function(bookInfo,callback){
    // hut.findOne({_id : bookInfo.id}, callback);
    hut.update({_id: bookInfo.id},
    {$push: { bookedDates: bookInfo.date}}, callback);
}

// GETTING HUTS BY USER EMAIL

module.exports.getHutsByUsername = function(email,callback){
    // console.log('email');
    hut.find({user: email},callback);
}

module.exports.deleteHut = function(id, callback){
    hut.remove({_id: id}, callback);
}

module.exports.getHutsById= function(id, callback){
    hut.findById(id, callback)
}

module.exports.updateMyHut = function(updatedData, callback){
    hut.update({_id:updatedData.id},
    {$set: {
        name: updatedData.name,
        rooms: updatedData.rooms,
        maxPersonAllowed: updatedData.maxPersonAllowed,
        rent: updatedData.rent,
        location: updatedData.location,
        description: updatedData.description
    }}, callback
    )
}

module.exports.addReviews = function(review, callback){
    hut.update({_id: review.id},
    {$push:{
        reviews: review.message
    }},callback)
}

module.exports.fetchReviews= function(id, callback){
    hut.findOne({_id: id}, callback)
}


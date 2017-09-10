const express = require('express');
const router = express.Router();
const hut = require('../models/huts');
const config = require('../config/database');
const multer = require('multer');                  // Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
const fs = require('fs');

// ADDING HUT
router.post('/addhut',(req, res, next)=>{
    // console.log('location',req.body.location)
    // console.log('date', req.body.bookingDetails)
    var newHut = new hut({
         user: req.body.email,
         name: req.body.name,
         unit: req.body.unit,
         rooms: req.body.rooms,
         maxPersonAllowed: req.body.maxPersonAllowed,
         address: req.body.address,
         location: req.body.location,
         latitude: req.body.latitude, 
         longitude: req.body.longitude,
         rent: req.body.rent,
         description: req.body.description,
         imgPath: req.body.imgPath,
         bookedDates: req.body.bookedDate
    });

    console.log(newHut);

    hut.addHut(newHut,(err, hut)=>{
        // console.log('faddu',newHut)
        if(err){
            console.log('error')
            res.json({
                success: false,
                msg: 'Failed to post hut',
            })
        }
        else{
            res.json({
                success: true,
                msg: 'Your hut has been added',
                hutdetails: hut
            })
        }
    })
    


})

// GET ALL HUTS
router.get('/fetchhuts',(req, res, next)=>{

    hut.getHuts((err, hut)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Error'
            })
        }

        else{
            let hutData = []
            for(var i=0 ; i < hut.length ; i++){
                let base64imgArray = [];
                for(var j=0 ; j< hut[i].imgPath.length ; j++){
                    let base64 = new Buffer(fs.readFileSync(hut[i].imgPath[j])).toString('base64')
                    base64imgArray.push(base64);
                }
            
                hutData.push({
                    id: hut[i]._id,
                    user: hut[i].user,
                    name: hut[i].name,
                    unit:hut[i].unit,
                    rooms: hut[i].rooms,
                    maxPersonAllowed: hut[i].maxPersonAllowed,
                    address: hut[i].address,
                    location: hut[i].location,
                    latitude: hut[i].latitude,
                    longitude: hut[i].longitude,
                    rent: hut[i].rent,
                    description: hut[i].description,
                    bookedDates: hut[i].bookedDates,
                    base64Img: base64imgArray
                })

            }
            res.json({
                success: true,
                hut: hutData,
                msg: 'Success'
            })
        }
    })
})

router.post('/book', (req, res, next) =>{
    
    let bookInfo = {
        id: req.body.id,
        date: req.body.date
    }
    console.log('hhjj', bookInfo);
    hut.updateHut(bookInfo, (err, ack)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Error'
            })
        }

        else{
            res.json({
                success: true,
                msg: 'Hus is booked successfully'
            })
        }
    })
})

// GET USER HUTS
router.get('/getuserhuts/:email',(req, res, next)=>{
    // console.log('get', req.body);
    let email = req.params.email
    // console.log(email);
    hut.getHutsByUsername(email, (err, hut)=>{
        if(err) throw err

        else{


let hutData = []
            for(var i=0 ; i < hut.length ; i++){

                let base64imgArray = [];
                for(var j=0 ; j< hut[i].imgPath.length ; j++){
                    let base64 = new Buffer(fs.readFileSync(hut[i].imgPath[j])).toString('base64')
                    base64imgArray.push(base64);
                }
            
                hutData.push({
                    id: hut[i]._id,
                    user: hut[i].user,
                    name: hut[i].name,
                    unit:hut[i].name,
                    rooms: hut[i].rooms,
                    maxPersonAllowed: hut[i].maxPersonAllowed,
                    address: hut[i].address,
                    location: hut[i].location,
                    latitude: hut[i].latitude,
                    longitude: hut[i].longitude,
                    rent: hut[i].rent,
                    description: hut[i].description,
                    bookedDates: hut[i].bookedDates,
                    base64Img: base64imgArray
                })

            }
            if(hutData.length >= 1){
                res.json({
                    success: true,
                    myHut: hutData,
                    msg: 'Success'
                })
            }

            else{
                res.json({
                    success: false,
                    myHut: hutData,
                    msg: 'You have not posted any hut yet.'
                })
            }
            
            // console.log(hutData.length)
        }
    })
})

router.delete('/:id', (req, res, next)=>{
    // console.log('delete request', req.params.id);
    let id = req.params.id;
    hut.deleteHut(id, (err, ack)=>{
        if(err) throw ANGLE_instanced_arrays
        else{
            res.json({
                success:true,
                msg: 'hut deleted'
            })
        }
    })
})

// MULTER IS USED FOR EXTRACTING FILES FROM THE REQUEST BODY
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

var upload = multer({ storage: storage }).single("uploads")


// HANDLING ROUTE OF UPLOADING HUT IMAGES
router.post('/hutimages', function (req, res) {
    // console.log('image upload',req.file);

  upload(req, res, function (err) {
      
    if (err) {
        res.json({
            success: false,
            msg: 'Error occured'
        })
    }
    var raw = new Buffer(fs.readFileSync(req.file.path)).toString('base64');
    // console.log(raw.substring(0,50));
    res.json({
        success: true,
        msg: 'image uploaded successfully',
        path: req.file.path
    })
  })
})


router.get('/images/:id',(req, res)=>{
    // console.log('request', req.params.id);
    var id = req.params.id
    hut.getHutsById(id, (err, hut)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Error'
            })
        }
        else{
            console.log(hut)
            let base64imgArray = []
            for(var i=0 ; i< hut.imgPath.length ; i++){
                    let base64 = new Buffer(fs.readFileSync(hut.imgPath[i])).toString('base64')
                    let imgObj = {
                        base64: base64,
                        imgPath: hut.imgPath[i]
                    }
                    base64imgArray.push(imgObj);
                }
            
            res.json({
                success: true,
                base64: base64imgArray 
            })
        }
    })

});

router.put('/hut/:id', (req, res, next) =>{
    // console.log(req.params.id)
    var updatedData= {
        id: req.params.id,
        name: req.body.name,
        rooms: req.body.rooms,
        maxPersonAllowed: req.body.maxPersonAllowed,
        rent: req.body.rent,
        location: req.body.location,
        description: req.body.description
    }
    hut.updateMyHut(updatedData, (err, ack)=>{
        if(err){
            res.json({
                success: false,
                msg: 'Not updated'
            })
        }

        else{
            res.json({
                success: true,
                msg: 'your hut has been updated successfully'
            })
        }
    })
})

router.post('/reviews', (req, res)=>{
    console.log('submit reviews', req.body)
    hut.addReviews(req.body, (err, data)=>{
        if(err) throw err 

        else{
            res.json({
                success: true,
                msg: 'review submitted'
            })
        }
    })
})

router.get('/fetchreviews/:id', (req, res)=>{
    console.log('get request', req.params.id);
    hut.fetchReviews(req.params.id, (err, data)=>{
        if (err) throw err;

        else{
            let base64imgArray = []
            for(var i=0 ; i< data.imgPath.length ; i++){
                    let base64 = new Buffer(fs.readFileSync(data.imgPath[i])).toString('base64')
                    base64imgArray.push(base64);
                }
            res.json({
                success: true,
                data: data.reviews,
                imgArray: base64imgArray
            })
        }
    })
})
// TO BE IMPLEMENTED
// router.delete('/imgUpdate/:path/:id',(req, res)=>{
//     console.log('delete api', req.params.id);
//     res.json({
//         success: true
//     })
// })

router.post('/search', (req, res)=>{
    // console.log('get request', req.body.filterby, req.body.name);
    
    hut.getHuts((err, hut)=>{
        if (req.body.filterby === 'Price'){
        var split = req.body.name.split("-");
        // console.log('split string',split);

        let allHuts = [];
        let filterHuts = [];
            for(var i=0 ; i < hut.length ; i++){
                let base64imgArray = [];
                for(var j=0 ; j< hut[i].imgPath.length ; j++){
                    let base64 = new Buffer(fs.readFileSync(hut[i].imgPath[j])).toString('base64')
                    base64imgArray.push(base64);
                }
            
                allHuts.push({
                    id: hut[i]._id,
                    user: hut[i].user,
                    name: hut[i].name,
                    unit:hut[i].unit,
                    rooms: hut[i].rooms,
                    maxPersonAllowed: hut[i].maxPersonAllowed,
                    address: hut[i].address,
                    location: hut[i].location,
                    latitude: hut[i].latitude,
                    longitude: hut[i].longitude,
                    rent: hut[i].rent,
                    description: hut[i].description,
                    bookedDates: hut[i].bookedDates,
                    base64Img: base64imgArray
                })

            }

            for(var i=0; i<allHuts.length ; i++){
                if(allHuts[i].rent >= split[0] && allHuts[i].rent <= split[1]){
                    filterHuts.push(allHuts[i]);
                    console.log('mil gaya')
                }
            }
            if(filterHuts.length >= 1){
                res.json({
                    success: true,
                    hut: filterHuts,
                })
            }
            else{
                res.json({
                    success: false,
                    hut: filterHuts,
                    msg: 'your search does not meet any criteria',
                })
            }
            
    }

     if(req.body.filterby === 'Filter By' || req.body.filterby === 'Name'){
            console.log(hut)
            let hutData = []
            for(var i=0 ; i < hut.length ; i++){
                let base64imgArray = [];
                for(var j=0 ; j< hut[i].imgPath.length ; j++){
                    let base64 = new Buffer(fs.readFileSync(hut[i].imgPath[j])).toString('base64')
                    base64imgArray.push(base64);
                }
            
                hutData.push({
                    id: hut[i]._id,
                    user: hut[i].user,
                    name: hut[i].name,
                    unit:hut[i].unit,
                    rooms: hut[i].rooms,
                    maxPersonAllowed: hut[i].maxPersonAllowed,
                    address: hut[i].address,
                    location: hut[i].location,
                    latitude: hut[i].latitude,
                    longitude: hut[i].longitude,
                    rent: hut[i].rent,
                    description: hut[i].description,
                    bookedDates: hut[i].bookedDates,
                    base64Img: base64imgArray
                })

            }
            let filter = req.body.name.toUpperCase();
            let filterHuts = [];
            for(var i=0 ; i < hutData.length ; i++){
                if(hutData[i].name.toUpperCase().indexOf(filter) > -1){
                    filterHuts.push(hutData[i]);
                }
            }
            if(filterHuts.length >= 1){
                res.json({
                    success: true,
                    hut: filterHuts,
                })
            }
            else{
                res.json({
                    success: false,
                    hut: filterHuts,
                    msg: 'your search saaad does not meet any criteria'
                })
            }
            
        }

         if(req.body.filterby === 'Location'){
            let hutData = []
            for(var i=0 ; i < hut.length ; i++){
                let base64imgArray = [];
                for(var j=0 ; j< hut[i].imgPath.length ; j++){
                    let base64 = new Buffer(fs.readFileSync(hut[i].imgPath[j])).toString('base64')
                    base64imgArray.push(base64);
                }
            
                hutData.push({
                    id: hut[i]._id,
                    user: hut[i].user,
                    name: hut[i].name,
                    unit:hut[i].unit,
                    rooms: hut[i].rooms,
                    maxPersonAllowed: hut[i].maxPersonAllowed,
                    address: hut[i].address,
                    location: hut[i].location,
                    latitude: hut[i].latitude,
                    longitude: hut[i].longitude,
                    rent: hut[i].rent,
                    description: hut[i].description,
                    bookedDates: hut[i].bookedDates,
                    base64Img: base64imgArray
                })

            }
            let filter = req.body.name.toUpperCase();
            let filterHuts = [];
            for(var i=0 ; i < hutData.length ; i++){
                if(hutData[i].location.toUpperCase().indexOf(filter) > -1){
                    filterHuts.push(hutData[i]);
                }
            }
            if(filterHuts.length >= 1){
                res.json({
                    success: true,
                    hut: filterHuts,
                })
            }
            else{
                res.json({
                    success: false,
                    hut: filterHuts,
                    msg: 'your search does fahad not meet any criteria'
                })
            }
            
        }


        if(err){
            res.json({
                success: false,
                msg: 'Error'
            })
        }
    })
})


module.exports = router;
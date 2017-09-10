const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const huts = require('./routes/postHuts')
const config = require('./config/database');

//Database connection
mongoose.connect(config.database);

// On connection success
mongoose.connection.on('connected', function(){
    console.log("connected to database" + config.database);
})

// on connection error
mongoose.connection.on('error', function(err){
    console.log("Database error:" + err);
})

const app = express();

app.use(cors());                            // allowing any domain can access (support cross origin)

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Passport Middleware
app.use(passport.initialize());             // passport is used for authenticating with a json web token
app.use(passport.session());     

// require('./config/passport')(passport);           

app.use('/users', users);

app.use('/post', huts);

app.use('/get', huts);

app.use('/delete', huts);

app.use('/uploads', huts);

app.use('/update', huts);

//Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{                                          // Every route go to the index.html file
    res.sendFile(path   .join(__dirname, 'public/index.html'));
})

const port = process.env.PORT || 8080;

app.listen(port, () =>{
    console.log('server is running on port' + port);
})


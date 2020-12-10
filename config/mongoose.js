const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

let db = mongoose.connection;

db.on('err', function(err){
    if (err){
        console.log('Error while connecting to database');
    }
})

db.once('open', function(){
    console.log('connected to db');
})
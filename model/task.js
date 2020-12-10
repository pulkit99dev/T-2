const mongoose = require('mongoose');

let taskSchema = new mongoose.Schema({
    description:{
        type: String,
        require : true
    },
    category:{
        type: String,
        require : true
    },
    date:{
        type: Date,
        require: true
    }
});

const task = mongoose.model('task', taskSchema );

module.exports = task
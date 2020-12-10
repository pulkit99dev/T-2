const express = require('express');
const port = 9000;
const fs = require('fs');
const path = require('path');

//connecting to database
let db = require('./config/mongoose')

//connecting the Schema
let task = require('./model/task');

let app = express();

app.use(express.urlencoded());


// setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//creating task-list for example
let taskList= [
    {
        description :'1st',
        category : 'Job',
        date : 'date'
    },
    {
        description :'1st',
        category : 'Job',
        date : 'date'
    },
    {
        description :'1st',
        category :'Job',
        date : 'date'
    }
]

// rendering home page
app.get('/', function(req, res){

    task.find({}, function(err, tasks){
        if(err){
            console.log('failed to fetch');
            return;
        }
        res.render('home', {
            title : 'ToDo-App',
            task : tasks
        }
        )
    })

   
})

//create-task
app.post('/create-task', function(req, res){
    task.create({
        description: req.body.description,
        category : req.body.category,
        date :req.body.date
    }),
    function(err, newTask){
        if(err){
            console.log(`Failed`)
            return;
        }
        console.log('******',newTask);
        res.redirect('back');
    }

})




//creating express server 
app.listen(port, function(err){
    if(err){
        console.log('Failed to create server');
    }
    console.log(`Server is up & running at port ${port}`);
})
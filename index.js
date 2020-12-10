const express = require('express');
const port = 9000;

let app = express();

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
    res.render('home', {
        title : 'ToDo-App',
        task : taskList
    }
    )
})

// create-contact
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
        console.log(newTask);
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
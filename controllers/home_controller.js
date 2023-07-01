//importing Contact model
const Tasks = require('../models/Tasklist');

module.exports.home = function(req, res){
    Tasks.find({})
    .then(function(tasks){
        return res.render('home', {
            tasks_list : tasks
        });
    })
    .catch((err) => {
        console.log('Error in fetching tasks from db!');
    });
}


module.exports.createTask = function(req, res){
    Tasks.create({
        description: req.body.description,
        date: req.body.date,
        category: req.body.category,
        done: false
    })
    .then(function(newTask){
        console.log('*********', newTask);
        res.redirect('back');
    })
    .catch((err) => {
        console.log('Error in creating a task!');
    });
}

module.exports.deleteTask = function(req, res){
    let ids = req.query.id;
    ids = ids.split(',');

    ids.forEach((id) => {
        Tasks.findByIdAndDelete(id)
        .catch((err) => {
            console.log('Error in deleting task from db!');
        });
    });

    res.redirect('back');
}
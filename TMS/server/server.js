const connection =require('./db')

const express = require("express");
const cors =  require('cors');
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.get('/tasks', (req,res) => {
    const TASK_QUERY =
    connection.query(TASK_QUERY, (err, response) =>{
        if (err) console.log(err)
        else res.send(response)
   })
})
app.post('/addTask',(req,res) => {
    const ADD_QUERY =`insert into thetaskmanager.tasks(tasks) values ('${req.body.task}')`
    connection.query(ADD_QUERY, (err) =>{
        if (err) console.log(err)
        else res.send('task added')
   })
    
})
app.get('/deleteTask/:taskid', (req,res) => {
    console.log(req.params.taskid)
    const DELETE_QUERY = `DELETE FROM thetaskmanager.tasks where (taskid=${req.params.taskid})`
    connection.query(DELETE_QUERY, (err, res) =>{
        if (err) console.log(err)
        else res.send('task deleted')
   })
})
app.listen(4000, ()=> {
    console.log('running 4000')
})
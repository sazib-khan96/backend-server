const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
app.use(cors())

// this is middleWear 
app.use(express.json())

// default api 
app.get('/', (req,res) =>{
     res.send('Hello World')
})

// demo Users data 
const users = [
    {id:1, name:'Anika khan', email: 'anikakhan@gmail.com'},
    {id:2, name:'Sazib khan', email: 'sazibkhan@gmail.com'},
    {id:3, name:'Noman Khan', email: 'nomankhan@gmail.com'},
    {id:4, name:'Malek khan', email: 'malekkhan@gmail.com'},
    {id:5, name:'monika khan', email: 'monikakkhan@gmail.com'},
    {id:6, name:'Tonika khan', email: 'tonikakhan@gmail.com'},
    {id:7, name:'Konika khan', email: 'konikakhan@gmail.com'},
]

const students = [
   { name : "Asad", Age: 40, Location : 'dhaka', designation: 'incharge'},
   { name : "Sohel", Age: 30, Location : 'dhaka', designation: 'incharge'},
   { name : "Sazib", Age: 28, Location : 'chittagong', designation: 'incharge'},
   { name : "Shahin", Age: 40, Location : 'Chittagong', designation: 'incharge'},
]
// students api 
app.get('/students', (req,res) => {
    res.send(students)
})

// users info api 
app.get('/users', (req,res)=> {
    res.send(users)
})


// post api create 

app.post('/users',(req,res) => {
    console.log('post method called')
    const newUser = req.body
    console.log(newUser)
})

app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})
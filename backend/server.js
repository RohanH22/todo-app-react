
const express = require('express')
const {createTodo, updateTodo} = require('./types')

const {create} = require('./db')

const app = express()
app.use(express.json())

app.post('/todo', (req,res)=>{
    // const createVailadation = req.body
    // const todoVaildation = createTodo.safeParse(createVailadation);
  const todoVaildation = createTodo.safeParse({
        title: req.body.title,
        description: req.body.description
    })

    if(!todoVaildation.success){
      res.status(411).json({
        msg:'Invaild Inputs'
      })
      return;
    }

    create.create({
        title: req.body.title,
        description: req.body.description
    })
    res.json({
        msg: 'Todo Created '
    })
    
})

app.get('/todos', (req,res)=>{


})
app.get('/completed', (req,res)=>{


})



app.listen(3000, ()=>{
    console.log('Server running on Port:3000');
})

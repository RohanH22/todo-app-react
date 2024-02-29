
const express = require('express')
const {createTodo, updateTodo} = require('./types')

const {todo} = require('./db')

const app = express()
app.use(express.json())

app.post('/todo', async (req,res)=>{
    const createVailadation = req.body
    const todoVaildation = createTodo.safeParse(createVailadation);

    if(!todoVaildation.success){
      res.status(411).json({
        msg:'Invaild Inputs'
      })
      return;
    }

    await todo.create({
        title: req.body.title,
        description: req.body.description,
        completed : false
    })
    res.json({
        msg: 'Todo Created '
    })
    
})

app.get('/todos', async (req,res)=>{
    const response = await todo.find({})

    res.json({
        todos: response
    })

})

app.put('/completed', async (req,res)=>{

    const updatePlayload = req.body
    const idvaildation = updateTodo.safeParse(updatePlayload)
    if(!idvaildation.success){
        res.status(404).json({
            msg:'Invaild ID / ID not found'
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed : true
    })

    res.json({
        msg :  "Todo marked as completed"
    })
})

app.post('/delete' ,async (req,res)=>{
    const updatePlayload = req.body
    const idvaildation = updateTodo.safeParse(updatePlayload)
    if(!idvaildation.success){
        res.status(404).json({
            msg:'Invaild ID / ID not found'
        })
        return;
    }

   await todo.deleteOne({
        _id : req.body.id
    })
    res.json({
        msg :  "Deletd the Todo"
    })

})


app.listen(3000, ()=>{
    console.log('Server running on Port:3000');
})

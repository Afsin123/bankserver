// This is the entry point of the server. Requests come here... 

const express = require('express')
const dataService = require('./services/data.service')
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("SERVER STARTED")
})

app.post('/',(req,res)=>{
    res.send("POST METHOD")
})

app.put('/',(req,res)=>{
    res.send("put method")
})

app.patch('/',(req,res)=>{
    res.send("patch method")
})
app.delete('/',(req,res)=>{
    res.send("delete method")
}) 

app.post('/register',(req,res)=>{

    console.log(req.body);
    const result= dataService.register(req.body.acno,req.body.username,req.body.password)
    res.status(result.statusCode).json(result)

})

app.post('/login', (req,res)=>{
    console.log(req.body);
    const result= dataService.login(req.body.acno,req.body.password)
    res.status(result.statusCode).json(result)
})

app.post('/deposit', (req,res)=>{
    console.log(req.body);
    const result= dataService.deposit(req.body.acno, req.body.password, req.body.amount )
    res.status(result.statusCode).json(result)
})

app.post('/withdraw', (req,res)=>{
    console.log(req.body);
    const result= dataService.withdraw(req.body.acno, req.body.password, req.body.amount )
    res.status(result.statusCode).json(result)
})

app.listen(3000,()=> {
    console.log("Server started at port number :3000");
})

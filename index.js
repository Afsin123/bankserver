

const express = require('express')
const app = express()
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

app.listen(3000,()=> {
    console.log("Server started at port number :3000");
})
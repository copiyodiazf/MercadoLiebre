const express= require ('express');
const process = require('process');

const app= express();
const path=require('path');

app.use(express.static(path.resolve(__dirname,'./public')));

app.listen(process.env.PORT || 3000, () => {
    console.log("SERVER corriendo en http://localhost:3000");
  });
  
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
})
app.get('/register',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
})

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})
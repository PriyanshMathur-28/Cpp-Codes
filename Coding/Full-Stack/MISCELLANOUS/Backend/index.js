const express=require('express');
const app= express();
let port=8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(port,(req,res)=>
{
    console.log('Listening to port');
})

app.get('/register',(req,res)=>
{
    let{username,password} =req.query;
    res.send(`The user is ${username}   `);
})

app.post('/register',(req,res)=>
{
    let {username, password}=req.body;
    res.send(`Form Submitted by ${username} and the password is ${password}`);
})
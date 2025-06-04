const express = require("express");
const app = express();
const port = 8080;
const path=require('path');
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.use(express.static(path.join(__dirname,"public")));

app.get("/ig/:username",(req,res)=>
{
    let {username} = req.params;
    const instadata=require('./data.json');
    let data= instadata[username];
    if(data)
    {
    res.render("instagram.ejs",{data});
    }
    else
    {
        res.render("error.ejs");
    }
})
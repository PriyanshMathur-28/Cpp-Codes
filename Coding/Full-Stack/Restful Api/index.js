const exp = require('constants');
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); // Uncomment this line

app.listen(port, (req, res) => {  
    console.log(`Listening to port ${port}`);
});

let posts = [
    { username: "apnacollege", content: "I love coding!" },
    { username: "shradhakhapra", content: "Hard work is imp to achieve success!" },
    { username: "rahul kumar", content: "I got selected for my first internship!" }
];

app.get('/', (req, res) => {
    res.send('Hi');
});
app.get('/posts', (req, res) => {
    res.render('index.ejs');
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;  // Accessing body of the POST request
    console.log({ username, content });  // Log the extracted data

    res.redirect('http://localhost:8080/');
});


app.patch("/posts/"),((req,res)=>
{
    console.log('Patch request Working');
})
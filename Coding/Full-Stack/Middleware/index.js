const express = require('express');
const app = express();
const Expresserror = require('./Expresserror');
const { Console } = require('console');
app.listen(8080, () => {
    console.log('Listening');
})

const check = (req, res, next) => {
    let { token } = req.query;
    if (token == 'giveaccess') {
        next();
    }

    throw new Expresserror(401, "ACCESS DENIED");

}

app.get('/api', check, (req, res) => {
    res.send("Data");
})

app.get('/err', (req, res) => {
    abcd = abcd;

})

app.use((err, req, res, next) => {
    let status = 500, message = "Some Error Occureed"
})

app.get("/", (req, res) => {
    res.send('Hello World');
})

app.get("/about", (req, res) => {
    res.send('Hello About');
})
app.get("/contact", (req, res) => {
    res.send('Hello Contact');
})
app.get("/admin", (req, res) => {
    throw new Expresserror(401, "ACCESS IS FORBIDDEN");
})
app.use((err, req, res, next) => {
    let { status = 500, message = "Some error Occured" } = err;
    res.status(status).send(message);
})
app.get('/', (req, res) => {
    console.log('Hi - for get ');
})

app.use((req, res, next) => {
    console.log('Hi');
    next();
})


const handleValidation= (err)=>
{
    console.log("Validation Error Occured");
    return err;
}


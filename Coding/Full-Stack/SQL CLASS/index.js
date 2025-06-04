const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const methodOverride = require('method-override')

const path = require('path');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));

let getRandomUser = function () {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "1234",
});

let port = 8080;
app.listen(port, () => {
    console.log('Server Started');
});

app.get('/', (req, res) => {
    let q = `SELECT count(*) FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Database query error");
        }
        let count = result[0]['count(*)'];
        res.render('home.ejs', { count });
        console.log(result[0]['count(*)']);
    });
});

app.get('/user', (req, res) => {
    let q = `SELECT * FROM USER`;
    
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Database query error");
        }
        res.render('user.ejs', { result });
    });
});

// Edit route
app.get('/user/:id/edit', (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM USER WHERE ID = '${id}'`;
    
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Database query error");
        }
        let user=result[0];
        res.render('edit.ejs',{user}); 
    });
});

// UPDATE ROUTE

app.patch('/user/:id', (req, res) => {
    let { id } = req.params;
    let { password: formpass, username: newusername } = req.body;
    let q = `SELECT * FROM USER WHERE ID = ?`;

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Database query error");
        }

        let user = result[0];
        if (!user) {
            return res.status(404).send('User not found');
        }

        if (formpass !== user.password) {
            return res.status(401).send('Wrong password');
        } else {
            let q2 = `UPDATE USER SET username = ? WHERE ID = ?`;
            connection.query(q2, [newusername, id], (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send("Update query error");
                }
                if (result.affectedRows === 0) {
                    return res.status(404).send("No user found to update");
                }
                res.redirect('/user ');
            });
        }
    });
});


app.get('/user/new',(req,res)=>
{
    res.render('newuser.ejs');
})

app.post('/user/new', (req, res) => {
    let { id, username, email, password } = req.body;
    let q = `INSERT INTO USER (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
    
    connection.query(q, (err, result) => {
        if (err) throw err;
        res.redirect('/user');
    });
});


app.get('/user/:id/delete',(req,res)=>
{
        res.send('delete.ejs')
})
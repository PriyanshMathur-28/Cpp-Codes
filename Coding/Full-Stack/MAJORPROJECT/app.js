const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");

// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"public/css")));

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// Server Listener
app.listen(8080, () => {
    console.log(`Server is listening on port 8080`);
});

// MongoDB Connection
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

main()
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.log('Error connecting to DB:', err);
    });

// Routes
app.get("/", (req, res) => {
    res.send('Hi, I am root \n<body> <a href=/listing>Click here </a>to Go to Home page');
});

// Index Route
app.get('/listing', async (req, res) => {
    const allListing = await Listing.find({});
    res.render('listing/index', { allListing });
});

// New Route
app.get('/listing/new', (req, res) => {
    res.render('listing/new');
});

// Show Route
app.get('/listing/:id', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listing/show', { listing });
});

// Post Request Route
app.post('/listing', async (req, res) => {
    const newlist = new Listing(req.body.listing);
    await newlist.save();
    res.redirect('/listing');
});

// Edit Route
app.get('/listing/:id/edit', async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listing/edit', { listing });
});

// Update Route
app.put('/listing/:id', async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listing`);
});

// Delete Route
app.delete('/listing/:id', async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listing');
});


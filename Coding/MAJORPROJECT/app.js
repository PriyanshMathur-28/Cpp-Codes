const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js");
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const { nextTick } = require('process');
const wrapasync = require("./utils/wrapasync.js");
const {listingSchema}=require("./schema.js");
const Expresserror=require("./utils/Expresserror.js");
app.use(express.static(path.join(__dirname, "public/css")));
// Middleware Setup
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public/css")));

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


const validatelisting= (req,res ,next)=>
{
    let {error}= listingSchema.validate(req.body);
    // console.log(result);
    if(error)
    {
        let errmsg=error.details.map((el)=> el.message).join(",");
        throw new Expresserror(404, errmsg);
    }
    else
    {
        next();
    }
}
// Index Route
app.get('/listing', wrapasync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render('listing/index', { allListing });
}));

// New Route
app.get('/listing/new', (req, res) => {
    res.render('listing/new');
});

// Show Route
app.get('/listing/:id',wrapasync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listing/show', { listing });
}));

// Post Request Route
app.post('/listing', validatelisting,wrapasync(async (req, res) => {
    const newlist = new Listing(req.body.listing);
    await newlist.save();
    res.redirect('/listing');
}));

// Edit Route
app.get('/listing/:id/edit',wrapasync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listing/edit', { listing });
}));

// Update Route
app.put('/listing/:id', validatelisting,wrapasync(async (req, res) => {
    const { title, description, price, location, country, image } = req.body.listing;
    const updatedListing = await Listing.findByIdAndUpdate(req.params.id, {
        title,
        description,
        price,
        location,
        country,
        image: { url: image }
    });
    res.redirect(`/listing/${updatedListing._id}`);
}));

// Delete Route
app.delete('/listing/:id', wrapasync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect('/listing');
}));

app.get("/admin",(req,res,next)=>
{
    next();
})


app.all("*",(req,res,next)=>
{
    next(new Expresserror(404,"Page Not Found"));
})

app.use((err,req,res,next) => {
    let {status=500, message="Something Went Wrong!"} =err;
    // res.status(status).send(message);
    res.status(status).render("error.ejs",{err});
})
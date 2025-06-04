// const path = require('path');
// const Chat = require('./models/chat.js');

// const app = express(); // Initialize the app first
// let port = 8080;

// // Use express.static correctly
// app.use(express.static(path.join(__dirname, "public"))); 

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');    
//     console.log("Connected to MongoDB");

//     let chat1 = new Chat({
//         from: 'neha',
//         to: 'priya',
//         msg: 'Send me your exam sheet',
//         created_at: new Date(),
//     });

//     chat1.save().then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });
// }

// main().catch((err) => {
//     console.log(err);
// });

// app.listen(port, () => {
//     console.log("Server is listening on Port 8080");
// });

// app.get('/', (req, res) => {
//     res.send('Working');
// });

// // Index Route
// app.get('/chats', async (req, res) => {
//     let chats = await Chat.find();
//     res.render('index.ejs', { chats });
// });

const mongoose=require('mongoose');
const express=require('express');
const app=express();

app.listen(8080,(req,res)=>
{
  console.log('Hi');
})
async function main() {
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017//test');
    console.log('connection successful');
  }
  catch(err)  
  {
    console.log(err);
  }
}


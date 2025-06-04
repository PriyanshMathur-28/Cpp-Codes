const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');    
    console.log("Connected to MongoDB");

    let chat1 = new Chat({
        from: 'neha',
        to: 'priya',
        msg: 'Send me your exam sheet',
        created_at: new Date(),
    });

    let allchats = [
        {
            from: "neha",
            to: 'preeti',
            msg: 'send me notes for exam',
            created_at: new Date(),
        },
        {
            from: "rohit",
            to: 'mohit',
            msg: 'teach me JS callbacks',
            created_at: new Date(),
        },
        {
            from: "anita",
            to: 'ramesh',
            msg: 'bring me some fruits',
            created_at: new Date(),
        },
        {
            from: "tony",
            to: 'peter',
            msg: 'love you 3000',
            created_at: new Date(),
        },
    ];

    // Insert the chat messages into the database
    await Chat.insertMany(allchats);
    console.log("All chats inserted successfully.");
}

// Call the main function
main().catch(err => console.error(err));


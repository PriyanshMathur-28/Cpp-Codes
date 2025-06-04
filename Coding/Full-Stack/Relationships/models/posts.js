const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
    console.log("Connection Successful");
}

main().catch((err) => {
    console.log(err);
});

const userSchema = new Schema({
    username: String,
    email: String,
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

const addData = async () => {
    let user = await User.findOne({ Username: "Rahul Kumar" });

    let post2 = new Post({
        content: "Bye Bye!",
        likes: 24,
    })
    post2.user=user;
    await post2.save();
}

addData();



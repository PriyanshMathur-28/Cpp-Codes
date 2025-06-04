// const mongoose = require('mongoose');

// async function main() {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/test');
//     console.log('Successful Connection');
//   } catch (error) {
//     // If an error occurs, it will be caught here
//     console.log('Connection Error:', error);
//   }
// }

// // Call the main function to start the connection process
// main();

// const userschema = new mongoose.Schema({
//   name: String,
//   email: String,
//   age: Number,
// });

// const user = mongoose.model('user', userschema);


// const mongoose=require('mongoose');
// async function main() {
//   await  mongoose.connect('mongodb://127.0.0.1:27017/test');
// }

// main()
// .then(() =>
// {
//   console.log("Connection successful");
// })
// .catch((err) =>
// {
//   console.log(err);
// })


// const userschema=new mongoose.Schema(
//   {
//     name:String,
//     email:String,
//     age:Number,
//   }
// );

// const User=mongoose.model("User",userschema);

// const user1=new User({
//   name:'Priyansh',
//   email:'hello@gmail.com',
//   age:19,
// })


// user1.save().then(res=>
// {
//   console.log(res);
// }
// ).catch(err =>
// {
//   console.log(err);
// }
// )


// User.insertMany([
//   {name:'Tony',email:'tonry@gmail.com',age:50},
//   {name:'Bob',email:'bob@gmail.com',age:30},
//   {name:'Bruce',email:'bruce@gmail.com',age:25},
// ])
// .then((res)=>
// {
//   console.log(res);
// })
// .catch((err)=>
// {
//   console.log(err);
// })




// User.updateMany({name:'Bruce'},{age:32})
// .then((res)=>
// {
//   console.log(res);
// })
// .catch((err)=>
// {
//   console.log(err);

// })

// User.findOneAndUpdate({name:'Tonny'},{age:100}, {new:true})


// User.deleteMany({name:'Bruce'})
// .then((Res)=>
// {
//   console.log(Res);
// })

// User.find({}).then((res)=>
// {
//   console.log(res);
// })

// User.findByIdAndDelete({_id:'67271034854ca8c04ce7e961'})
// .then((res)=>
// {
//   console.log(res);
// })


// const mongoose = require('mongoose');
const kittySchema = new mongoose.Schema({
  name: String
});

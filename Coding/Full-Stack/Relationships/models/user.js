const mongoose=require('mongoose');
const {Schema}=mongoose;

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().then(()=>
{
    console.log("Connection Successful");
})
.catch(()=>
{
    console.log(err);
})


const userSchema = new Schema(
    {
        username:String,
        address:[{
            _id: false,
            location:String,
            city:String,
        },
    ],
})

const user=mongoose.model("User",userSchema);

const adduser=  async()=>
{
    let user1=new user({
        username:"Sherlock Homes",
        address:{
            location:"221 Baker Street",
            city:"London"
        }
    })
    user1.address.push({location:"P32 Wallstreet", city:"London"})
    let result=await user1.save();
    console.log(result);
}


adduser();
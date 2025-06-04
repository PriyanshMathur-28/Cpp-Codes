const mongoose=require('mongoose');
async function main() {
  await  mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
.then(() =>
{
  console.log("Connection successful");
})
.catch((err) =>
{
  console.log(err);
})


const bookschema=mongoose.Schema({
    title:{
        type:String,
        required: true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:
    {
        type:Number,
        min:[1,'price is too low']
    },
    discount:
    {
        type:Number,
        default:0,
    },
    category:
    {
        type:String,
        enum:["fiction","non-fiction"]
    },
    genre: [String]
});


const Book=mongoose.model('Book',bookschema);

Book.findByIdAndUpdate('67273e739a1c1d1f8fad3d9c', {price:-100}, {runValidators:true})
.then((res)=>
{
    console.groupCollapsed(res);
}).catch((err)=>
{
    console.log(err.errors.price.properties.message);
})
// let book1=new Book({
//     title:'Maths clasf',
//     author:'RD Sharma',
//     price: 400,
//     category:'fiction',
//     genre:['sttring']
// })

// book1.save().then((res) =>
// {
//     console.log(res);
// }
// ).catch((err)=>
// {
//     console.log(err);
// })


// let book2=new Book({
//     title:'ji',
//     price: '300'

// })

// book2.save().then((res) =>
// {
//         console.log(res);
//     }
//     ).catch((err)=>
//     {
//         console.log(err);
//     })


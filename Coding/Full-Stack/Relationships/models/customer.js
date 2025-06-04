const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
        console.log("Connection Successful");
    } catch (err) {
        console.error("Error connecting to the database:", err);
    }
}
main();

// Define the Order schema
const orderSchema = new Schema({
    item: String,
    price: Number,
});

// Define the Customer schema
const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async()=>
// {
//     console.log("PRE MIDDLEWARE");
// });


customerSchema.post("findOneAndDelete",async()=>
    {
        console.log("PRE MIDDLEWARE");
    });
    

// Create Mongoose models
const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// Function to add a customer with orders
const addCustomer = async () => {
    try {
        // Create a new customer
        let cust1 = new Customer({
            name: 'Rahul Kumar',
        });

        // Find orders
        let order1 = await Order.findOne({ item: "Chips" });
        let order2 = await Order.findOne({ item: "Chocolate" });

        // Add orders to the customer's orders array if they exist
        cust1.orders.push(order1);
        cust1.orders.push(order2);

        // Save the customer
        let result = await cust1.save();
        console.log("Customer added successfully:", result);
    } 
    catch(err)
    {
        console.log("Error");
    }
    let result=await Customer.find({});
    console.log(result);
};

// Call the addCustomer function
addCustomer();




const addCust=async () => {
    let newCust=new Customer({
        name:"Priyansh Mathur"
    });
    let newOrder= new Order({
        item:'Pizza',
        price:300
    })
    newCust.orders.push(newOrder);
    await newOrder.save();
    await newCust.save();
}

const delcust=async () => {
    let data=await Customer.findByIdAndDelete('675b37f98f56043e3f6662d8 ');
    console.log(data);
}

delcust();

AD
const exp=require("express");
const app=exp();
let port = 3000;
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
  })

app.get("/home",(req,res)=>
{
  res.send("This is home Page");
})

app.get("/:username/:id/:name", (req,res)=>
{
  console.log("THIS IS VARIABLE REQUEST");
  let {user,id,name}=req.params;
  res.send(`<h1>You have searched for Path Parameters: ${user} and id: ${id} and name: ${name}</h1>`);
})


app.get("/search",(req,res)=>
{
  let {q}=req.query;
  console.log(q);
  res.send(`Search Query is ${q}`);
})

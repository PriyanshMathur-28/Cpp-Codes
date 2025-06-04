const mongoose=require('mongoose');
const todoschem = new mongoose.Schema({
    title: String,
    desc: String,
    isdone: Boolean
  });
  

  const Kitten = mongoose.model('Kitten', kittySchema);

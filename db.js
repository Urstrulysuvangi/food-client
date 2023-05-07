const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://Suvangi:Loknath%401@cluster0.1xhlcrh.mongodb.net/';

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})

var db= mongoose.connection

db.on('connected',()=>{
    console.log('MongoDB connected');
})

db.on('error', ()=>{
    console.log("mongo conn failed");
})

module.exports =mongoose
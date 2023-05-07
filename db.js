const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://DBUser:DBUserAEC@cluster0.chaxi07.mongodb.net/mern-pizza'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('MongoDB connected');

})

db.on('error' , ()=>{
    console.log('MongoDB Connection Failed');

})

module.exports = mongoose
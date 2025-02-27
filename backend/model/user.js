const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:String,
    age:Number,
    email:String,
    password:String,
})
module.exports = mongoose.model('user',userSchema)
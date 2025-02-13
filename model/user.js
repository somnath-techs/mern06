const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    fullname:String,
    age:Number,
    email:String,
})
module.exports = mongoose.model('user',userSchema)
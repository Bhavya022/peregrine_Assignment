//name,email,Image 
const mongoose = require('mongoose') 
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
    // },
    // Image:{
    //     type:String, 
    //     required:true
    // }
}) 

module.exports = mongoose.model('User',userSchema);
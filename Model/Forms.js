const mongoose = require("mongoose")

const FormSchema = new mongoose.Schema({
    FirstName :{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    }, 
    EmailAddress:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    City :{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    PostCode:{
        type:Number,
        required:true
    },
    Phone :{
        type:Number,
        required:true
    }
})

module.exports =  mongoose.model("Form",FormSchema)

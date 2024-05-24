const mongoose = require("mongoose")

const FormSchema = new mongoose.Schema({
    Name :{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    }, 
    Country:{
        type:String,
       
    },
    PostCode:{
        type:String, 
    },
    Phoneno :{
        type:String,
        required:true
    },
    companyname:{
        type:String,
    },
    joblevel:{
        type:String,
    },
    jobtitle:{
        type:String,
    },
    revenue:String,
    industry:String,
    empsize:String
})

module.exports =  mongoose.model("Form",FormSchema)

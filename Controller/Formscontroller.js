const FormsC = require("../Model/Forms")

// get
exports.getForms= async (req,res)=>{
    try {
        const data = await FormsC.find()
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// getDatabyid
exports.getFormsbyid = async (req,res)=>{
    try {
        const data = await FormsC.findById(req.params.id)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postForms = async (req,res)=>{
    try {
        const newFormsC = new FormsC(req.body)
        const data = await newFormsC.save()
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// put
exports.putForms = async (req,res)=>{
    try {
        const data = await FormsC.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteForms = async (req,res)=>{
    try {
        const data = await FormsC.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
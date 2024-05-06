const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const app = express()
const Formroute = require("./Routes/FormsRoutes")


// middleware
app.use(express.json())

app.use(cors())

app.use("/DownloadPaper",Formroute)



// by default get
app.get("/",(req,res)=>{
    res.send("Download API!!")
})

// connection
app.listen(process.env.PORT)

async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()
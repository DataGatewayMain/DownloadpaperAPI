const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const app = express()
const Formroute = require("./Routes/FormsRoutes")

const morgan = require("morgan"); 
const apicache = require("apicache"); 

const { createClient } = require('redis');;

// middleware
app.use(express.json())

app.use(cors())

app.use(morgan('dev')); 
  



// Create a Redis client
const redisClient = createClient({
    url: 'redis://:db3M7JfjTDzQW3zFDn16LHl6wzz7yNKI@redis-13790.c323.us-east-1-2.ec2.redns.redis-cloud.com:13790'
});

redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

async function initializeRedis() {
    try {
        await redisClient.connect();
        console.log('Connected to Redis');
    } catch (err) {
        console.error('Could not connect to Redis...', err);
    }
}

// Configure apicache to use Redis
const cache = apicache.options({
    redisClient: redisClient
}).middleware;
  
// Apply cache only to GET requests
app.get("/DownloadPaper", cache('1 minutes'), Formroute);


app.use("/DownloadPaper",Formroute)



// by default get
app.get("/",(req,res)=>{
    res.send("Download API!!")
})

// connection
app.listen(process.env.PORT)

// Call initializeRedis to connect to Redis
initializeRedis().catch(console.error);

async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()
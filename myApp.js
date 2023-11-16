require('dotenv').config();
let express = require('express');
let app = express();




app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
})

app.get("/",(req,res)=>{
    //res.send("Hello Express");
    res.sendFile(__dirname+"/views/index.html");
});

app.get("/now",(req,res,next)=>{
    req.time = new Date().toString();
    next();
},(req,res)=>{
    res.json({"time":req.time});
})



app.use("/public",express.static(__dirname+"/public"))


app.get("/json",(req,res)=>{
    
    res.json({"message":
    process.env.MESSAGE_STYLE!=="uppercase"?
    "Hello json":"Hello json".toUpperCase()});
})

























 module.exports = app;

require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

/*
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
*/
app.use("/public",express.static(__dirname+"/public"))
app.get("/",(req,res)=>{
    //res.send("Hello Express");
    res.sendFile(__dirname+"/views/index.html");
    
});

app.post("/name",(req,res)=>{
    res.json({name:`${req.body.first||"no Firstname"} ${req.body.last||"no Lastname"}`});

})

app.get("/:word/echo",(req,res)=>{
    res.json({echo:req.params.word});
    next();
})

/*app.route("/name").get((req,res)=>{
    res.json({name:`${req.query.first||"no Firstname"} ${req.query.last||"no Lastname"}`})
}).post((req,res)=>{
    res.json({name:`${req.query.first||"no Firstname"} ${req.query.last||"no Lastname"}
    `})
})
*/


















 module.exports = app;

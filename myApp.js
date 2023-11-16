let express = require('express');
let app = express();




app.get("/",(req,res)=>{
    //res.send("Hello Express");
    res.send(__dirname+"/view/index.html");
});































 module.exports = app;

const express = require("express");
const app = express();
const port = 8080;
const http =require("http");
function response(req, res) { 
    res.status(200).send({nom:"uadb"});
    
 };
app.get("/get",response);
app.get("/",response);
app.get("/essai",(req,res)=>{
    res.send("bonjour");
    
})
 http.createServer(app).listen(port,function name(){
    console.log("Application start at : localhost"+port);
 })
// app.listen(port, ()=>{
//     console.log("Application start at : localhost"+port);
// });
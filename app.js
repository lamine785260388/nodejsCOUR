const express = require("express");
const app = express();

const http =require("http");
require("dotenv").config();
const port = process.env.PORT ;

function response(req, res) { 
  
    res.status(200).send({nom:"uadb"});
    
    
 };
 const bodyParser=require("body-parser")
 app.use(bodyParser.json());
 
app.get("/get",response);
app.get("/",response);
app.get("/essai",(req,res)=>{
    res.send("bonjour");
    
})
function enregistrer(req,res){

    console.log(req.body);
    res.send(req.body);

}
app.post("/enregistrer/:name/:id",enregistrer)
// app.get("/enregistrer",enregistrer)
 http.createServer(app).listen(port,function name(){
    console.log("Application start at : localhost"+port);
    
 })
// app.listen(port, ()=>{
//     console.log("Application start at : localhost"+port);
// });
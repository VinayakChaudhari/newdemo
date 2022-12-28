const express=require("express");
const path = require("path");
const app=express();

app.use(express.static(path.join(__dirname,"public")));
app.get("/",(res,resp)=>{
resp.sendFile(path.join(__dirname,"index.html"))

})
app.listen(7777);
console.log("server listen");
const express =  require("express");
const { createtodoschema,updatetodoschema } = require("./types");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todos",function(req,res){
  const createpayload = req.body;
  const parsedpayload = createpayload.safeParse(createtodoschema);
  if(!parsedpayload.success){
    res.status(411).json({
      msg : "bad input"
    });
    return;
  }


})

app.get("/todos",function(req,res){
  
})

app.put("/completed",function(req,res){
  const updatepayload = req.body;
  const parsedpayload = updatepayload.safeParse(updatetodoschema);
  if(!parsedpayload.success){
    res.status(411).json({
      msg : "bad input"
    });
    return;
})
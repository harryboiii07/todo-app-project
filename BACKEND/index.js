const express =  require("express");
const { createtodoschema,updatetodoschema } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/todos",async function(req,res){
  const createpayload = req.body;
  const parsedpayload = createpayload.safeParse(createtodoschema);
  if(!parsedpayload.success){
    res.status(411).json({
      msg : "bad input"
    });
    return;
  }
  await todo.create({
    title : createpayload.title,
    description : createpayload.description,
    completed : false
  });
  res.json({
    msg : "instance added successfully"
  });


})

app.get("/todos",async function(req,res){
  const todos = await todo.find({});
  res.json({
    todos : todos
  });
})

app.put("/completed",async function(req,res){
  const updatepayload = req.body;
  const parsedpayload = updatepayload.safeParse(updatetodoschema);
  if(!parsedpayload.success){
    res.status(411).json({
      msg : "bad input"
    });
    return;
  }
  await todo.updateOne({
    _id : req.body.id
  },
  {
    completed : true
  });
  res.json({
    msg : "todo marked as completed"
  })
})
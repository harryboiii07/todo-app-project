//mongodb+srv://admin:KGTM5SImpmIqenme@cluster0.matwpjf.mongodb.net/

const mongoose = require("mongoose");
const { string, boolean } = require("zod");
mongoose.connect("mongodb+srv://admin:KGTM5SImpmIqenme@cluster0.matwpjf.mongodb.net/todo-app");

const todoschema = new mongoose.Schema({
  title : String,
  description : String,
  completed : Boolean
});

const todo = mongoose.model("todo",todoschema);

module.exports = {
  todo : todo
}
import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({  //schema name
  From: { type: String },
  To: { type: String },
  msg: { type: String }
});

const Chat = mongoose.model("Chat", ChatSchema);     //Chat-model name ,2nd argunment -SchemaName.
export default Chat; 

// mongodb connnection > mongoose.connect - model banana - data insert -then only database app mai show hoga
// using nodemon -single data shows multiple times
// Never put .create() or .save() outside of a route or function in your main server file — 
// Nodemon restarts = Mongo inserts again.
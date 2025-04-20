import Chat from "../models/chatSchema.js";

const getReq= async(req,res)=>{
const getChat= await Chat.find({});
res.send({
    success:true,
    data:getChat,
    message:"data send success get request"
})
}

export default getReq;
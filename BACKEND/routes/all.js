import express from "express";
const router=express.Router();
import postReq from "../routeLogic/postLogic.js";
import getReq from "../routeLogic/getLogic.js";

router.get("/", (req,res)=>{
    res.send("hlw get")
})
router.post("/createUser", postReq);
router.get("/getBlog", getReq);

export default router;

// app -multiple files mai nhi banana -gives argument handler  error .
// so use routes which maintain a continuity. 
// router.get("/" , getReq); ---isme function call nhi karna --vo error dega.
//hame routes ko function mai likh kar export nhi karna kyuki router ko export karna mai vo ho jayega
//app.use (index.js, /api/v1) => vha par hamna apna base route define kiya hai , so aage jab bhi routes use karenga
//  toh ush route ka aage likhna hai (all.js, /blog )
// if we write /api/v1/blog => then the total route become => /api/v1/api/v1/blog  => which shows error.
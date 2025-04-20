import mongoose  from "mongoose" ;
import dotenv from "dotenv";
dotenv.config(); //load dotenv 
const murl=process.env.MONGODB_URL;


if(!murl){
    console.log("error")
}

const connection=()=>{
try{
        mongoose.connect(murl)
        .then(()=>{console.log(`${murl} mongo connect success`)})
        .catch((e)=>{console.log("error")})
} catch(e){
    console.log(e.status)
}
}

export default connection
//ES module export way 



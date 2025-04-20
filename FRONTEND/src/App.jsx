import Chat from "./components/Chat.jsx";
import AllChat from "./components/AllChat.jsx";
import {Route,Routes} from "react-router-dom";
export default function App(){
  return(
    <>
    <Routes> 
     <Route path="/" element={<Chat/>}/>
     <Route path="/dashboard" element={<AllChat/>}/>
    </Routes>
    </>
  )
}
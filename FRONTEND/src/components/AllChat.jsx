import { useState, useEffect } from "react";
import axios from "axios"; 
import "./AllChat.css";
console.log("hlw1")

function AllChat() {
    console.log("hlw2")

    const [chats, setChats] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("hlw3")

        const fetchChats = async () => {
            try {
                console.log("hlw")
                const response = await axios.get('http://localhost:3000/api/v1/getBlog');
                console.log("API Response:", response.data);
                
                const chatsData = response.data.data 
                
                 setChats(chatsData);
                console.log("State chats:", chatsData);
            }
            catch (e) {
                console.error("Fetch error:", e.message);
                setError(e.message);
            }
        }
        
        fetchChats()
    }, []);
    if (error) return <div>Error: {error}</div>;
    if (chats.length === 0) return <div>No chats found</div>;
    return (
        <>
           <div className="chat-container">
            <h1 className="chat-header">All Users Chats</h1>
            <ul className="chat-list">
                {chats.map((chat) => (
                    <li key={chat._id} className="chat-item">
                        <div>
                            <span className="message-from">From:</span> {chat.From}
                        </div>
                        <div>
                            <span className="message-to">To:</span> {chat.To}
                        </div>
                        <div className="message-text">
                            <strong>Message:</strong> {chat.msg}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
} 

export default AllChat;


// Added a key prop to the mapped items (important in React)

// Axios responses have the data in response.data, not directly in the response object

// use await in callback function  =>Wrapped the code in an async function inside useEffect
//then make async to that function


// The variable is block-scoped to that block.
// It cannot be accessed outside the block.

//let => block scope , cant access outside of try catch block
//try catch =>  use const variable .

//chats is an array => so pass [] as an initial value
// If you're trying to fetch data directly from a database in your React frontend, 
// this is not recommended and usually not possible for security reasons.

// Direct Backend Import Won't Work:
// You cannot directly import backend model files (like chatSchema.js) into React
// Frontend and backend run in separate environments (browser vs Node.js)
// Proper Architecture:
// Backend should expose APIs (REST/GraphQL)
// Frontend makes HTTP requests to these APIs
// The 404 Not Found error occurs when your frontend makes a request to an endpoint that doesn't exist on your backend server.
// The error in your code is related to the unnecessary await before setChats(chatsData). 
// Since setChats is synchronous (it doesn't return a Promise), you should not use await with it.
// await can only be used with Promises, but setChats is a synchronous state update function.
// If you mistakenly use await on a non-Promise, JavaScript throws a syntax error.
// Inside useEffect, the function definition should end with };.

//for react code shortcut genrators => download package 
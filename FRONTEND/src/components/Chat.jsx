import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Chat.css"; 
// Import the CSS file

export default function Chat() {
  const navigate = useNavigate();
  let [ formData, setFormData ] = useState({
    From: "",
    To: "",
    msg: ""
  });

  function inpChange(e) {
    setFormData((prevdata) => ({
      ...prevdata,
      [e.target.name]: e.target.value,
    }));
  }

  async function btn1Submit(e) {
    try {
      e.preventDefault();
      console.log("Form data:",formData);
      const url = import.meta.env.VITE_MAIN_URL;
      const res = await axios.post(`${url}/createUser`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log("Server response:", res.data);
      navigate("/dashboard");
    } catch (e) {
      console.error("API Error:", {
        message: e.message,
        response: e.response?.data,
        status: e.response?.status
      });
    }
  }

  return (
    <div className="chat-container">
      <form onSubmit={btn1Submit} className="chat-form">
        <h2 className="form-title">Send a Message</h2>
        
        <div className="form-group">
          <label htmlFor="From">From:</label>
          <input
            type="text"
            id="From"
            name="From"
            value={formData.From}
            placeholder="Your name"
            onChange={inpChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="To">To:</label>
          <input
            type="text"
            id="To"
            name="To"
            value={formData.To}
            placeholder="Recipient's name"
            onChange={inpChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="msg">Message:</label>
          <textarea
            id="msg"
            name="msg"
            value={formData.msg}
            placeholder="Type your message here..."
            onChange={inpChange}
            className="form-input message-input"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-button">Show All Chats.</button>

      </form>
    </div>
  );
}

//events handling mai-function ko execute() nhi karana 
// -asie karna seh vo evnets mai work nhi karenga.
// (prevData) => ({ ... }): function that takes previous state and
//  returns updated state
// ...prevData: keeps existing data 
// [e.target.name]: e.target.value: updates only the specific input that was changed


// { ...formData }
// This uses the spread operator to copy all key-value
//  pairs from formData into a new object.
// It ensures a shallow copy, so the original formData doesn't
//  get accidentally mutated or changed.

// btn click -request ko call kar raha hai.
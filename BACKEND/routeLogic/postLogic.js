import Chat from "../models/chatSchema.js";

const postReq = async (req, res) => {
    try {
        console.log("Incoming request body:", req.body);
        
        // Validate request body exists
        if (!req.body) {
            return res.status(400).json({ error: "Request body is missing" });
        }

        const { From, To, msg } = req.body;

        // Validate required fields
        if (!From || !To || !msg) {
            return res.status(400).json({ 
                error: "Missing required fields",
                required: ["From", "To", "msg"]
            });
        }

        // Correct way to create and save a document
        const newChat = await Chat.create({ 
            From, 
            To, 
            msg 
        });
        
        // Alternative: Using save()
        // const newChat = new Chat({ From, To, msg });
        // await newChat.save();

        console.log("Document saved successfully:", newChat);
        
        return res.status(201).json({ 
            success: true,
            message: "Chat created successfully",
            data: newChat
        });
    } catch (e) {
        console.error("Error saving to database:", e);
        return res.status(500).json({ 
            success: false,
            error: "Internal server error",
            details: process.env.NODE_ENV === 'development' ? e.message : undefined
        });
    }
};

export default postReq;
//not use app in this file- here  pure logic
//req.body() works only on put and post request.
// Show data on page from DB	✅ GET
// Submit form data to DB	🔁 POST
// res.json() automatically sets Content-Type: application/json
// res.send() is more general, can send strings, buffers, or objects.
//API req-prefer res.json()

// res.send({
//     success: true,
//     data: getchat,
//     message: "Fetch all the data"
//   });
//we are sending a object which has 3 parameters.

// success	✅ Shows whether the operation was successful or not (true/false).
// data	📄 The actual data we fetched from MongoDB (getchat).
// message	🗣️ A custom message to explain what happened. Helpful for debugging or UI.
  

//req.body=>takes data from user field (input,placeholder)
// const { From1, To1, msg1 } = req.body;
// const From1 = req.body.From;   
// const To1 = req.body.To;
// const msg1= req.body.msg;
// inma user filled values store ho jayengi.
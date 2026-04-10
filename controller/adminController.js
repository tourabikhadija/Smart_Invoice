import User from "../models/user.js";


export const getAllClients = async (req , res) => {
    try {
        const client = await User.find({ role: "client" });
        res.status(200).json(client);
   } catch (error){
         res.status(500).json({ message: error.message });
         }
};



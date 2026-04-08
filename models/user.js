import mongoose from 'mongoose';

const usershema = new mongoose.Schema({
    name: {
        type: string,
        requied : true,
    },
    email: {
        type:string,
        requied: true,
        unique: true,
    },
    password: {
        type: string,
        requeid: true,
    },
    role:{
        type:string,
        enum:["admin", "user"],
        default: "user",
    } 
});
 const user = mongoose.model("User", usershema);
 export default user;
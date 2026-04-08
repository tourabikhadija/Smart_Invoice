import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";



const app = express();
app.use(express.json());


// connexion mongo
mongoose
.connect("mongodb://localhost:27017/")
.then(()=> {
    console.log("connected to database!");

})
.catch((err) =>{
    console.error("MongoDb connection error:", err);
});

app.listen(7000, ()=>{
    console.log("server is started");
});
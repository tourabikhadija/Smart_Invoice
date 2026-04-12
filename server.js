import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import FournisseurRoutes from "./routes/FournisseurRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import factureRoutes from "./routes/factureRoutes.js";



const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/Fournisseur", FournisseurRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/facture", factureRoutes);




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
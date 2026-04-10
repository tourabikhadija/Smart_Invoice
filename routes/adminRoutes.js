import { getAllClients } from "../controller/adminController.js";
import { authMiddleware, adminMiddleware } from "../Middleware/authMiddleware.js";

import express from "express";
const router = express.Router();

router.get("/clients", authMiddleware, adminMiddleware, getAllClients);
export default router;

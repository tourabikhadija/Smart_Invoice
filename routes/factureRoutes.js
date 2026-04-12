
import express from "express";
import Facture from "../models/facture.js";
import {createFacture, getFacture, getFactureById, updateFacture ,deleteFacture} from "../controller/factureController.js";
import {authMiddleware} from "../Middleware/authMiddleware.js";
import { checkOwner } from "../middleware/ownership.js";

const router = express.Router();


router.post("/", authMiddleware, createFacture);
router.get ("/",authMiddleware, getFacture);
router.get ("/:id", authMiddleware,getFactureById);
router.put ("/:id",authMiddleware, checkOwner(Facture, "client"), updateFacture);
router.delete ("/:id",authMiddleware, checkOwner(Facture, "client"), deleteFacture);

export default router;
import express from "express";
import Fournisseur from "../models/Fournisseur.js";
import {
  createFournisseur,
  getFournisseur,
  getFournisseurById,
  updateFournisseur,
  deleteFournisseur,
} from "../controller/FournisseurController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";
import { checkOwner } from "../middleware/ownership.js";
const router = express.Router();

router.post("/", authMiddleware, createFournisseur);

router.get("/",authMiddleware, getFournisseur);

router.get("/:id",authMiddleware, getFournisseurById);

router.put("/:id",authMiddleware,checkOwner(Fournisseur, "client"), updateFournisseur);

router.delete("/:id",authMiddleware, checkOwner(Fournisseur, "client"), deleteFournisseur);

export default router;
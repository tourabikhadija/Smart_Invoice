import express from "express";
import {
  createSupplier,
  getSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
} from "../controller/supplierController.js";
import {authMiddleware} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createSupplier);

router.get("/", getSuppliers);

router.get("/:id", getSupplierById);

router.put("/:id", updateSupplier);

router.delete("/:id", deleteSupplier);

export default router;
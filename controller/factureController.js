import Facture from "../models/facture.js";


export const createFacture = async (req, res ) =>{
    try {
        const facture = await Facture.create({...req.body, client: req.user.id})
        res.status(201) .json(facture)
        }catch (error) {
            res.status(500).json({message: error.message});
        }
};

export const getFacture = async (req, res) => {
  try {
    const factures = await Facture.find();
    res.status(200).json(factures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFactureById = async (req, res) => {
  try {
    const facture = await Facture.findById(req.params.id);

    if (!facture) {
      return res.status(404).json({ message: "Facture not found" });
    }

    res.status(200).json(facture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFacture = async (req, res) => {
  try {
    const facture = await Facture.findById(req.params.id);

    if (!facture) {
      return res.status(404).json({ message: "Facture not found" });
    }

    if (facture.status === "paid") {
      return res.status(400).json({
        message: "Cannot update a fully paid invoice",
      });
    }

    const updatedFacture = await Facture.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updatedFacture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFacture = async (req, res) => {
  try {
    const facture = await Facture.findById(req.params.id);

    if (!facture) {
      return res.status(404).json({ message: "Facture not found" });
    }

    if (facture.paymentCount > 0) {
      return res.status(400).json({
        message: "Cannot delete invoice with payments",
      });
    }

    await Facture.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Facture deleted successfully",
    });

    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};
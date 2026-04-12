import Fournisseur from "../models/Fournisseur.js";

export const createFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.create({ ...req.body, client: req.user.id });
    res.status(201).json(fournisseur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.find();
    res.status(200).json(fournisseur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFournisseurById = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findById(req.params.id);

    if (!fournisseur) {
      return res.status(404).json({ message: "fournisseur not found" });
    }

    res.status(200).json(fournisseur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!fournisseur) {
      return res.status(404).json({ message: "fournisseur not found" });
    }

    res.status(200).json(fournisseur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteFournisseur = async (req, res) => {
  try {
    const fournisseur = await Fournisseur.findByIdAndDelete(req.params.id);

    if (!fournisseur) {
      return res.status(404).json({ message: "fournisseur not found" });
    }

    res.status(200).json({ message: "fournisseur deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

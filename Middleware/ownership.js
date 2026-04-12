

export const checkOwner = (model, field) => {
  return async (req, res, next) => {
    try {
      const doc = await model.findById(req.params.id);

      if (!doc) {
        return res.status(404).json({ message: "Not found" });
      }

      if (doc[field].toString() !== req.user.id) {
        return res.status(403).json({ message: "Not allowed" });
      }

      req.doc = doc;
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};
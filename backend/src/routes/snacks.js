const express = require("express");
const router = express.Router();
const Snack = require("../models/snack");
const auth = require("../../middleware/authMiddle")
// Get all snacks
router.get("/", auth, async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.json(snacks);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err);
  }
});

// Get a single snack by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (snack) {
      res.json(snack);
    } else {
      res.status(404).json({ message: "Snack not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.error(err);
  }
});

// Create a new snack
router.post("/add-snack", auth, async (req, res) => {
  const snack = new Snack({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    stock: req.body.stock,
  });

  try {
    const newSnack = await snack.save();
    res.status(201).json(newSnack);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.error(err);
  }
});

// Update a snack
router.put("/update-snack/:id", auth, async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (snack) {
      snack.name = req.body.name || snack.name;
      snack.description = req.body.description || snack.description;
      snack.price = req.body.price || snack.price;
      snack.category = req.body.category || snack.category;
      snack.imageUrl = req.body.imageUrl || snack.imageUrl;
      snack.stock = req.body.stock || snack.stock;
      snack.updatedAt = Date.now();

      const updatedSnack = await snack.save();
      res.json(updatedSnack);
    } else {
      res.status(404).json({ message: "Snack not found" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.error(err);
  }
});

// Delete a snack
router.delete("/remove-snack/:id", auth, async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (snack) {
      await snack.deleteOne();
      res.json({ message: "Snack deleted" });
    } else {
      res.status(404).json({ message: "Snack not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

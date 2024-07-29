const mongoose = require("mongoose");
const { Schema } = mongoose;

const snackSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true,
  },
  category: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: { type: Date, default: Date.now },
});

const Snack = mongoose.model("Snack", snackSchema);
module.exports = Snack;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CarSchema = new Schema({
  name: { type: String, required: [true, "Please provide a content!"] },
  model: { type: String, required: [true, "Please provide a model!"] },
  brand: { type: String, required: [true, "Please provide a brand!"] },
  speed: { type: Number, required: [true, "Please provide a speed!"] },
  launched_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});
const Car = mongoose.model("Car", CarSchema);
module.exports = Car;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IntroSchema = new Schema({
  name: { type: String, required: [true, "Please provide ur name!"] },
  age: { type: Number, default: 21 },
  fatherName: { type: String },
  archive: { type: Boolean, default: false },
  current_course: { type: String, default: undefined },
  updated_at: { type: Date, default: Date.now() },
});
const Intro = mongoose.model("Intro", IntroSchema);
module.exports = Intro;

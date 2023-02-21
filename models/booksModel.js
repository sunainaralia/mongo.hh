const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  name: { type: String, required: [true, "Please provide a name!"] },
  pages: { type: Number, default: 0 },
  archive: { type: Boolean, default: false },
  author: { type: String, default: undefined },
  updated_at: { type: Date, default: Date.now() },
});
const Books = mongoose.model("Books", BooksSchema);
module.exports = Books;

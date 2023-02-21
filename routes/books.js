var express = require("express");
var router = express.Router();
const Books = require("../models/booksModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const books = await Books.find();
  res.send({ data: books });
});

router.post("/create", async function (req, res, next) {
  const { name, pages, archive, author } = req.body;
  const newBooks = await Books.create({
    name,
    pages,
    archive,
    author,
  });

  //   Send Response
  res.send({ data: newBooks });
});

module.exports = router;

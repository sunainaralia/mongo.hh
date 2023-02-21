var express = require("express");
var router = express.Router();
const Intro = require("../models/introModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const intro = await Intro.find();
  res.send({ data: intro });
});

router.post("/create", async function (req, res, next) {
  const { name, age, fatherName } = req.body;
  const newIntro = await Intro.create({
    name,
    age,
    fatherName,
  });

  //   Send Response
  res.send({ data: newIntro });
});

module.exports = router;

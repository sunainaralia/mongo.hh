var express = require("express");
var router = express.Router();
const Car = require("../models/carModel");

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const cars = await Car.find();
  res.send({ data: cars });
});

router.post("/create", async function (req, res, next) {
  const { name, model, brand, speed } = req.body;
  const newCar = await Car.create({
    name,
    model,
    brand,
    speed,
  });
  //   Send Response
  res.send({ data: newCar });
});

module.exports = router;

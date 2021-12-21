const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Reserva = require("../models/Reserva");
const { db } = require("../models/user");

router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  const result = await user.save();
  const { password, ...data } = await result.toJSON();
  res.send(data);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(400).send({ message: "Invalide Password" });
  }
  const token = jwt.sign({ _id: user._id }, "SECRET");
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 86400,
  });

  res.send({ message: "Success" });
});
router.get("/user", async (req, res) => {
  try {
    const cookie = req.cookies["jwt"];
    const claims = jwt.verify(cookie, "SECRET");
    if (!claims) {
      return res.status(401).send({
        message: "Unauthenticated",
      });
    }
    const user = await User.findOne({ _id: claims._id });

    const { password, ...data } = await user.toJSON();

    res.send(data);
  } catch (error) {
    return res.status(401).send({
      message: "Unauthenticated",
    });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 0,
  });
  res.send({ message: "success" });
});

//  Reservas

router.post("/createReser", async (req, res) => {
  try {
    const reserva = new Reserva({
      date: req.body.date,
      hora: req.body.hora,
      servicio: req.body.servicio,
      usuario: req.body.usuario,
      estado: req.body.estado,
    });
    const result = await reserva.save();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/reservas/:id", async (req, res) => {
  const  id  = req.params.id;

  await Reserva.findByIdAndDelete(id);

  // code 200 is ok too
  res.status(204).json();
});

router.get("/reservas", async (req, res) => {
  try {
    const reservations = await Reserva.find().lean();
    res.send(reservations);
  } catch (error) {
    console.log({ error });
  }
});
router.put("/reservas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updates = req.body;
    const result = await Reserva.findByIdAndUpdate(id, updates);
    // code 200 is ok too
    res.status(204).json();
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;

const express = require("express");

const User = require("../Models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send({ error: "Query not found" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });

    if (!user) return res.status(422).json({ message: "User not found" });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).send({ error: `id: ${id} not found` });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const findUser = await User.findOne({ "id": id });

    if (!findUser) {
      return res.status(422).json({ message: "User not found" });
    } else {
      await User.updateOne({ id: id }, req.body);
    }

    return res.status(200).json(findUser);
  } catch (err) {
    return res.status(400).send({ error: `id: ${id} not found` });
  }
});

module.exports = (app) => app.use("/auth", router);

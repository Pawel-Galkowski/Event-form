const express = require("express");
const router = express.Router();
const standardMailer = require("../middleware/EventFormMailer");

// @route   Post forms/eventForm
// @desc    Post standard form
// @access  Private

router.post("/eventForm", async (req, res) => {
  try {
    const resEmail = standardMailer(req.body);
    await resEmail.then((value) => {
      return value;
    });
    return res.json({ msg: "Message send" });
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: "Invalid  data" }] });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getAllQuestions,
  addQuestion,
} = require("../controllers/questionController");

router.get("/getQuestions", getAllQuestions);

router.post("/addQuestion", addQuestion);

module.exports = router;

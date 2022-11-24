const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  question: {
    type: String,
    required: [true, "Input Question"],
  },
  answer: String,
});

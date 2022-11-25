// const { request } = require("express");
const Question = require("../models/Question");

const getAllQuestions = async (req, res, next) => {
  const questions = await Question.find();
  console.log(questions);
  if (!questions) {
    res.status(400).json({ messsage: "No Questions found" });
  }
  return res.status(200).json({
    questions: questions,
  });
};

const addQuestion = async (req, res, next) => {
  const { question } = req.body;
  const sQuestion = new Question({
    question: question,
  });

  await sQuestion.save((err) => {
    if (err) return res.status(400).json({ err: err });
  });
  return res.status(200).json({ message: "Question added successfully" });
};

module.exports = { getAllQuestions, addQuestion };

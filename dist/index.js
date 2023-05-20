import { Quiz } from "./quiz.js";

document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quizContainer");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const nextButton = document.getElementById("nextButton");
  const resultContainer = document.getElementById("resultContainer");
  const scoreElement = document.getElementById("score");

  const quiz = new Quiz(questionElement, optionsElement, resultContainer, scoreElement);

  nextButton.addEventListener("click", () => {
    quiz.nextQuestion();
  });

  quiz.start();
});

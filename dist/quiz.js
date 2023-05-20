export class Quiz {
    constructor(questionElement, optionsElement, resultContainer, scoreElement) {
        this.questionElement = questionElement;
        this.optionsElement = optionsElement;
        this.resultContainer = resultContainer;
        this.scoreElement = scoreElement;
        this.questions = [
            {
                question: "What is the capital of France?",
                options: ["Paris", "London", "Berlin", "Rome"],
                answer: 0,
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Mars", "Jupiter", "Saturn", "Neptune"],
                answer: 1,
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                options: ["China", "Japan", "Thailand", "India"],
                answer: 1,
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
                answer: 0,
            },
            {
                question: "What is the largest ocean in the world?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: 3,
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: ["Mars", "Venus", "Mercury", "Saturn"],
                answer: 0,
            },
            {
                question: "Who wrote the play 'Romeo and Juliet'?",
                options: ["William Shakespeare", "George Orwell", "Charles Dickens", "Jane Austen"],
                answer: 0,
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Cu", "Fe"],
                answer: 0,
            },
            {
                question: "Which is the largest land mammal?",
                options: ["Elephant", "Lion", "Giraffe", "Hippopotamus"],
                answer: 0,
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
                answer: 0,
            },
        ];
        this.score = 0;
        this.currentQuestion = 0;
    }
    start() {
        this.showQuestion();
    }
    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion === this.questions.length) {
            this.showResults();
        }
        else {
            this.showQuestion();
        }
    }
    showQuestion() {
        const question = this.questions[this.currentQuestion];
        this.questionElement.textContent = question.question;
        this.optionsElement.innerHTML = "";
        question.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.className = "btn btn-primary me-2";
            optionButton.textContent = option;
            optionButton.addEventListener("click", () => {
                this.checkAnswer(index);
            });
            this.optionsElement.appendChild(optionButton);
        });
    }
    checkAnswer(answer) {
        const question = this.questions[this.currentQuestion];
        if (answer === question.answer) {
            this.score++;
        }
        this.nextQuestion();
    }
    showResults() {
        this.questionElement.textContent = "Quiz Completed!";
        this.optionsElement.innerHTML = "";
        this.resultContainer.classList.remove("d-none");
        this.scoreElement.textContent = `Your score: ${this.score} / ${this.questions.length}`;
    }
}

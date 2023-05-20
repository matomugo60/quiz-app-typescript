interface Question {
    question: string;
    options: string[];
    answer: number;
  }
  
  export class Quiz {
    private questions: Question[] = [
      {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 1,
      },
      {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Jupiter", "Saturn", "Neptune"],
        answer: 2,
      },
      // Add more questions...
    ];
  
    private score: number = 0;
    private currentQuestion: number = 0;
  
    constructor(
      private questionElement: HTMLElement,
      private optionsElement: HTMLElement,
      private resultContainer: HTMLElement,
      private scoreElement: HTMLElement
    ) {}
  
    public start(): void {
      this.showQuestion();
    }
  
    public nextQuestion(): void {
      this.currentQuestion++;
      if (this.currentQuestion === this.questions.length) {
        this.showResults();
      } else {
        this.showQuestion();
      }
    }
  
    private showQuestion(): void {
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
  
    private checkAnswer(answer: number): void {
      const question = this.questions[this.currentQuestion];
      if (answer === question.answer) {
        this.score++;
      }
      this.nextQuestion();
    }
  
    private showResults(): void {
      this.questionElement.textContent = "Quiz Completed!";
      this.optionsElement.innerHTML = "";
      this.resultContainer.classList.remove("d-none");
      this.scoreElement.textContent = `Your score: ${this.score} / ${this.questions.length}`;
    }
  }
  
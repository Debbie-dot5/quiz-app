const startQuiz = document.querySelector(".start-quiz");
const quizContainer = document.querySelector(".container");
const startText = document.querySelector(".welcome");
const quizQuestion = document.querySelector(".question");
const quiz = document.querySelector(".game");
const quizAnswer = document.querySelector(".answers");
const result = document.querySelector(".results");
const nextBtn = document.querySelector(".submit");
const playAgain = document.querySelector(".play-again");

startQuiz.addEventListener("click", () => {
   startQuiz.style.display = "none"
   startText.style.display = "none"
   quizContainer.style.display = "block"
   quiz.style.display = "block"
})



const questions = [
    {
       question: "What is the largest animal in the world?",
       answer: [
          {text: "Shark", correct: false},
          {text: "whale", correct: true},
          {text: "Elephant", correct: false},
          {text: "Octopus", correct: false} 
       ]
    }, 
 
    {
       question: "Who invented lightbulb?",
       answer: [
          {text: "you", correct: false},
          {text: "Elon Musk", correct: false},
          {text: "Tesla", correct: true},
          {text: "Jeff Bezos", correct: false} 
       ]
    },
     
    {
       question: "Which of these are the deadliest?",
       answer: [
          {text: "Shark", correct: true},
          {text: "whale", correct: false},
          {text: "Elephant", correct: false},
          {text: "Octopus", correct: false} 
       ]
    },
 
    {
       question: "4 + 2 * 8",
       answer: [
          {text: "48", correct: true},
          {text: "2", correct: false},
          {text: "20", correct: false},
          {text: "none", correct: false} 
       ]
    },
 
    {
       question: "Which of the following city is famously known as sin city?",
       answer: [
          {text: "New York", correct: false},
          {text: "Las Vegas", correct: true},
          {text: "Elephant", correct: false},
          {text: "Octopus", correct: false} 
       ]
    },
 
    {
       question: "Who owns Facebook?",
       answer: [
          {text: "Elon Musk", correct: false},
          {text: "Jeff Bezos", correct: false},
          {text: "Bill Gates", correct: false},
          {text: "Mark Zukerberg", correct: true} 
       ]
    },
 
 
    {
       question: "What year was Sliced bread founded?",
       answer: [
          {text: "1220", correct: false},
          {text: "412BC", correct: false},
          {text: "1950", correct: false},
          {text: "You were not born", correct: true} 
       ]
    },
 
    {
       question: "What programming Language was used to develop this quiz app?",
       answer: [
          {text: "Python", correct: false},
          {text: "Java", correct: false},
          {text: "Javascript", correct: true},
          {text: "C#", correct: false} 
       ]
    },
 
    {
       question: "Who is the main character in the anime `Monster`?",
       answer: [
          {text: "Dr Tenma", correct: true},
          {text: "Nina", correct: false},
          {text: "Titer", correct: false},
          {text: "Yohan", correct: false} 
       ]
    },
 
    {
       question: "Who is the Author of The Other Side at Midnight?",
       answer: [
          {text: "Sydney sheldon", correct: true},
          {text: "Bran mistook", correct: false},
          {text: "Jodan Smith", correct: false},
          {text: "Will Smith", correct: false} 
       ]
    },
 
    {
       question: "Who slapped Chris Rock on stage?",
       answer: [
          {text: "Jade Smith", correct: false},
          {text: "Rihanna", correct: false},
          {text: "Will Smith", correct: true},
          {text: "You", correct: false} 
       ]
    },

    {
        question: "What is sapa?",
        answer: [
           {text: "Being broke", correct: true},
           {text: "Being rich", correct: false},
           {text: "Being in a relationship", correct: false},
           {text: "No idea", correct: false} 
        ]
     }
 ];
 

 let currentQuestionIndex = 0;
 let score = 0;
 let correctAns = 0;
 let wrongAns = 0;
 let selectedAns;

 const restartQuiz = ()=>{
    currentQuestionIndex = 0;
    score = 0;
    correctAns = 0;
    wrongAns = 0;
    selectedAns;

   showQuestion(currentQuestionIndex);
 }

 playAgain.addEventListener("click", () => {
   result.style.display = "none"
   quiz.style.display = "block";
   restartQuiz();
 })

 const showResult = () =>{
   result.style.display = "block"
   quiz.style.display = "none";

   result.querySelector(".correct").textContent = `Correct Answers: ${correctAns}`;
   result.querySelector(".wrong").textContent = `Wrong Answers: ${wrongAns}`
   result.querySelector(".score").textContent = `Score: ${(correctAns - wrongAns)*10}`
 }

const showQuestion = (questionNumber) =>{
   if(currentQuestionIndex === questions.length) return showResult()
   selectedAns = null
    quizQuestion.textContent = questions[questionNumber].question;
    quizAnswer.innerHTML = questions[questionNumber].answer.map((item,index) =>
  `
  <div class="ans">
                <input name="answer" type="radio" id="${index}" value="${item.correct}">
                <label for="${index}">${item.text}</label>
            </div>
  `
    ).join("");

    selectAnswer();
}

const selectAnswer = () =>{
   quizAnswer.querySelectorAll("input").forEach(element=>{
      element.addEventListener("click", (event) => {
        selectedAns = event.target.value
      })
   })
};

const submitAnswer = () =>{
   nextBtn.addEventListener("click", () => {
      if(selectedAns !== null){
          selectedAns === "true" ? correctAns++ : wrongAns++
      currentQuestionIndex++
      showQuestion(currentQuestionIndex)
      } else{
         alert("You haven't picked an answer");
      }
     
   })
}

showQuestion(currentQuestionIndex)
submitAnswer();

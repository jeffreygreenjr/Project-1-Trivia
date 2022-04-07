// console.log("Hello world!")

// Global Variables

let $homeScreen = $('.homeScreen')
let $gameTitle = $('.gameTitle')

let $playingScreen = $('.playingScreens')

let $questionContainer = $('.questionContainer')
let $questionsBox = $('.questionsBox')

let $answersContainer = $('.answersContainer')
let $optionsColumn1 = $('.OptionsColumn1')
let $optionA = $('.optionA')
let $optionB = $('.optionB')
let $optionColumn2 = $('.optionColumn2')
let $optionC = $('.optionC')
let $optionD = $('.optionD')

// let $codingCategory = $('.codingCategory')
// let $sportsCategory = $('.sportsCategory')
// let $musicCategory = $('.musicCategory')

// let $questions = ${'.questions')
// let $codingquestions = $('#codingquestions')
// let $sportsquestions = $('#sportsquestions')
// let $musicquestions = $('#musicquestions')

let $answers = $('.answers')
let $codinganswers = $('#codinganswers')
let $sportsanswers = $('#sportsanswers')
let $musicanswers = $('#musicanswers')

let $wrongAnswer = $('.wrongAnswer')

let game = true;


// Object to hold questions and answers

let triviaQuestions = {
    question: "What is the best coding bootcamp in the world?",
    options: ["Full Stack Academy", "Northwestern University", "General Assembly", "Coding Dojo"],
    correctAnswer: "General Assembly"
}

console.log(triviaQuestions.question)
$questionsBox.text(triviaQuestions.question)
$optionA.text(triviaQuestions.options[0])
$optionB.text(triviaQuestions.options[1])
$optionC.text(triviaQuestions.options[2])
$optionD.text(triviaQuestions.options[3])


// Game Object

// class triviaGame {
//     constructor (triviaQuestions, currentQuestion, correct, incorrect) {
//         this.triviaQuestions = triviaQuestions
//         this.currentQuestion = 0
//         this.correct = 0
//         this.incorrect = 0
//     }
// }

// function loadQuestion() {
//     console.log($questionsBox.text(triviaQuestions.question))
//  
// loadQuestion()




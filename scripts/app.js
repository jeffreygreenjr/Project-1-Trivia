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

// let triviaQuestions = {
//     question: "What is the best coding bootcamp in the world?",
//     options: ["Full Stack Academy", "Northwestern University", "General Assembly", "Coding Dojo"],
//     correctAnswer: "General Assembly"
// }

// console.log(triviaQuestions.question)
// $questionsBox.text(triviaQuestions.question)
// $optionA.text(triviaQuestions.options[0])
// $optionB.text(triviaQuestions.options[1])
// $optionC.text(triviaQuestions.options[2])
// $optionD.text(triviaQuestions.options[3])

let codingTriviaArr = [
    {
        question: "What is the best coding bootcamp in the world?",
        optionA: "Full Stack Academy",
        optionB: "Northwestern University",
        optionC: "General Assembly",
        optionD: "Coding Dojo"
    }
]

function loadQuestion() {
    for (let i = 0; i < codingTriviaArr.length; i++) {
        console.log(`Looping through ${codingTriviaArr[i].question}`)
        $questionsBox.text(codingTriviaArr[i].question)
        $optionA.text(codingTriviaArr[i].optionA)
        $optionB.text(codingTriviaArr[i].optionB)
        $optionC.text(codingTriviaArr[i].optionC)
        $optionD.text(codingTriviaArr[i].optionD)
    } 
}

loadQuestion()


    // console.log($questionsBox.text(triviaQuestions.question))
 
// loadQuestion()

let sportsTriviaArr = [
    {
        question: "What is the best coding bootcamp in the world?",
        optionA: "Full Stack Academy",
        optionB: "Northwestern University",
        optionC: "General Assembly",
        optionD: "Coding Dojo"
    }
]

let musicTriviaArr = [
    {
        question: "What is the best coding bootcamp in the world?",
        optionA: "Full Stack Academy",
        optionB: "Northwestern University",
        optionC: "General Assembly",
        optionD: "Coding Dojo"
    }
]

// function answeredCorrectly() {
//     if 
// }

// function answeredIncorrectly() {
//     if
// }

// Game Object

// class triviaGame {
//     constructor (triviaQuestions, currentQuestion, correct, incorrect) {
//         this.triviaQuestions = triviaQuestions
//         this.currentQuestion = 0
//         this.correct = 0
//         this.incorrect = 0
//     }
// }




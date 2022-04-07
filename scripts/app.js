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
        optionD: "Coding Dojo",
        correctAnswer: "General Assembly",
    },
    // {
    //     question: "When did our cohort start?",
    //     optionA: "January 1st",
    //     optionB: "March 21st",
    //     optionC: "April 1st",
    //     optionD: "April 15th",
    //     correctAnswer: "March 21st",
    // }
]

loadQuestion()

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



// incorrectAnswer()

// function incorrectAnswer() {
//     if ($optionA.click) {
//         $optionA.css('background-color', 'red');
//     }
// }

$optionA.click(function(e) {
    // $optionA.css('background-color', 'red');
    // console.log(e.target.innerText)
    if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
        $optionA.css('background-color', 'green');
        // console.log(e.target.innerText)
    } else {
        $optionA.css('background-color', 'red')
    }
})

$optionB.click(function(e) {
    // $optionA.css('background-color', 'red');
    // console.log(e.target.innerText)
    if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
        $optionB.css('background-color', 'green');
        // console.log(e.target.innerText)
    } else {
        $optionB.css('background-color', 'red')
    }
})

$optionC.click(function(e) {
    // $optionA.css('background-color', 'red');
    // console.log(e.target.innerText)
    if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
        $optionC.css('background-color', 'green');
        // console.log(e.target.innerText)
    } else {
        $optionC.css('background-color', 'red')
        
    }
})

$optionD.click(function(e) {
    // $optionA.css('background-color', 'red');
    // console.log(e.target.innerText)
    if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
        $optionD.css('background-color', 'green');
        // console.log(e.target.innerText)
    } else {
        $optionD.css('background-color', 'red')
    }
})

// function answerChoice() {
//     if ($optionA.click && (e.target.innerText == correctAnswer) {
//         $optionA.css('background-color', 'red');
//     }
// }

// if ()

// loadQuestion()



// function answeredCorrectly() {
//     if 
// }




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




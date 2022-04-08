// console.log("Hello world!")

// Global Variables

let $homeScreen = $('.homeScreen')
let $gameTitle = $('.gameTitle')

let $playingScreens = $('.playingScreens')

let $questionContainer = $('.questionContainer')
let $questionsBox = $('.questionsBox')

let $answersContainer = $('.answersContainer')
let $optionsColumn1 = $('.OptionsColumn1')
let $optionA = $('.optionA')
let $optionB = $('.optionB')
let $optionColumn2 = $('.optionColumn2')
let $optionC = $('.optionC')
let $optionD = $('.optionD')
let $nextButton = $('.nextButton')

let $answers = $('.answers')
let $codinganswers = $('#codinganswers')
let $sportsanswers = $('#sportsanswers')
let $musicanswers = $('#musicanswers')

let $wrongAnswer = $('.wrongAnswer')

let game = true;


// Array of objects that store questions, answer options, and correct answer

let codingTriviaArr = [
    {
        question: "What is the best coding bootcamp in the world?",
        optionA: "Full Stack Academy",
        optionB: "Northwestern University",
        optionC: "General Assembly",
        optionD: "Coding Dojo",
        correctAnswer: "General Assembly",
    },
    {
        question: "When did our cohort start?",
        optionA: "January 1st",
        optionB: "March 21st",
        optionC: "April 1st",
        optionD: "April 15th",
        correctAnswer: "March 21st",
    },
    {
        question: "When is the expected end date?",
        optionA: "May 15st",
        optionB: "May 31st",
        optionC: "June 1st",
        optionD: "June 13th",
        correctAnswer: "June 13th",
    },
    {
        question: "Who won the world series in 2016?",
        optionA: "Chicago Cubs",
        optionB: "Cleveland Indians",
        optionC: "Boston Red Sox",
        optionD: "New York Yankees",
        correctAnswer: "Chicago Cubs",
    },
    {
        question: "What was Kanye West's debut album?",
        optionA: "808s & Heartbreak",
        optionB: "The College Dropout",
        optionC: "Late Registration",
        optionD: "Graduation",
        correctAnswer: "The College Dropout",
    },
    {
        question: "Who won the Stanley Cup in 2010, 2013, and 2015?",
        optionA: "Detroit Red Wings",
        optionB: "Pittsburg Penguins",
        optionC: "Chicago Blackhawks",
        optionD: "Los Angeles Kings",
        correctAnswer: "Chicago Blackhawks",
    },
    {
        question: "Who won the NBA Championship from 1991-1993 and 1996-1998?",
        optionA: "Los Angeles Lakers",
        optionB: "Boston Celtics",
        optionC: "New York Knicks",
        optionD: "Chicago Bulls",
        correctAnswer: "Chicago Bulls",
    },
    {
        question: "What is Howey's first name?",
        optionA: "Michael",
        optionB: "Julia",
        optionC: "Jose",
        optionD: "Jeffrey",
        correctAnswer: "Michael",
    },
]

let i = 0

$playingScreens.hide()
console.log($playingScreens)

$homeScreen.click(function() {
    $homeScreen.hide()
    $playingScreens.show()
    loadQuestion()
})

function loadQuestion() {
    addContent()
        $optionA.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionA.css('background-color', 'green');
                console.log("Correct")
            } else {
                $optionA.css('background-color', 'red');
                // $answersContainer.text("STRIKE")
                // $answersContainer.css('color', 'red')
                console.log("Incorrect")
            }
            // removeContent()
            // addContent()
            // i++
        })
        $optionB.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionB.css('background-color', 'green');
                console.log("Correct")
            } else {
                $optionB.css('background-color', 'red');
                // $answersContainer.text("STRIKE");
                // $answersContainer.css('color', 'red');
                console.log("Incorrect")
            }
            // removeContent()
            // addContent()
            // i++
        })
        $optionC.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionC.css('background-color', 'green');
                console.log("Correct")
            } else {
                $optionC.css('background-color', 'red');
                // $answersContainer.text("STRIKE");
                // $answersContainer.css('color', 'red');
                console.log("Incorrect")
            }
            // removeContent()
            // addContent()
            // i++
        })
        $optionD.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionD.css('background-color', 'green');
                console.log("Correct")
            } else {
                $optionD.css('background-color', 'red');
                // $answersContainer.text("STRIKE");
                // $answersContainer.css('color', 'red');
                console.log("Incorrect")
            }
        })
}

loadQuestion()

$nextButton.click(function() {
    if (i < codingTriviaArr.length) {
        console.log(i)
        i++;
        console.log(i)
        loadQuestion(i);
        removeAnswerStyling();
    }
})

function addContent() {
    $answersContainer.css('color', 'darkslategrey');
    $questionsBox.text(codingTriviaArr[i].question)
    $optionA.text(codingTriviaArr[i].optionA)
    $optionB.text(codingTriviaArr[i].optionB)
    $optionC.text(codingTriviaArr[i].optionC)
    $optionD.text(codingTriviaArr[i].optionD)
}

function removeContent() {
    $questionsBox.text("")
    $optionA.text("")
    $optionB.text("")
    $optionC.text("")
    $optionD.text("")
    $optionA.css('background-color', 'silver')
    $optionB.css('background-color', 'silver')
    $optionC.css('background-color', 'silver')
    $optionD.css('background-color', 'silver')
}

function removeAnswerStyling() {
    $optionA.css('background-color', 'silver');
    $optionB.css('background-color', 'silver');
    $optionC.css('background-color', 'silver');
    $optionD.css('background-color', 'silver');
    // $answersContainer.text("STRIKE")
    // $answersContainer.css('color', 're')
}



// ----------------------------------------------------------------

// Scrapped js

// loadQuestion()

// i++ after every click event, if & else

// setInterval(() => {
// function loadQuestion() {
//     for (let i = 0; i < codingTriviaArr.length; i++) {
//         console.log(`Looping through ${codingTriviaArr[i].question}`)
//         $questionsBox.text(codingTriviaArr[i].question)
//         $optionA.text(codingTriviaArr[i].optionA)
//         $optionB.text(codingTriviaArr[i].optionB)
//         $optionC.text(codingTriviaArr[i].optionC)
//         $optionD.text(codingTriviaArr[i].optionD)
//         $optionA.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionA.css('background-color', 'green');
//             } else {
//                 $optionA.css('background-color', 'red')
//             }
//         })
//         $optionB.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionB.css('background-color', 'green');
//             } else {
//                 $optionB.css('background-color', 'red')
//             }
//         })
//         $optionC.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionC.css('background-color', 'green');
//             } else {
//                 $optionC.css('background-color', 'red')
//             }
//         })
//         $optionD.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionD.css('background-color', 'green');
//             } else {
//                 $optionD.css('background-color', 'red')
//             }
//         })  
//     }
// }

     // $nextButton.click(function() {
        //     if (i < codingTriviaArr.length) {
        //         console.log(i)
        //         i++;
        //         console.log(i)
        //         loadQuestion(i);
        //         removeAnswerStyling();
        //     }
        // })

// function removeContent() {
//     $questionsBox.text("")
//     $optionA.text("")
//     $optionB.text("")
//     $optionC.text("")
//     $optionD.text("")
//     $optionA.css('background-color', 'silver')
//     $optionB.css('background-color', 'silver')
//     $optionC.css('background-color', 'silver')
//     $optionD.css('background-color', 'silver')
// }

// function addContent() {
//     $questionsBox.text(codingTriviaArr[i].question)
//     $optionA.text(codingTriviaArr[i].optionA)
//     $optionB.text(codingTriviaArr[i].optionB)
//     $optionC.text(codingTriviaArr[i].optionC)
//     $optionD.text(codingTriviaArr[i].optionD)
// }

// $questionsBox.text(codingTriviaArr[0].question)
//         $optionA.text(codingTriviaArr[0].optionA)
//         $optionB.text(codingTriviaArr[0].optionB)
//         $optionC.text(codingTriviaArr[0].optionC)
//         $optionD.text(codingTriviaArr[0].optionD)



// let $codingCategory = $('.codingCategory')
// let $sportsCategory = $('.sportsCategory')
// let $musicCategory = $('.musicCategory')

// let $questions = ${'.questions')
// let $codingquestions = $('#codingquestions')
// let $sportsquestions = $('#sportsquestions')
// let $musicquestions = $('#musicquestions')


// $optionA.click(function(e) {
//     if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
//         $optionA.css('background-color', 'green');
//     } else {
//         $optionA.css('background-color', 'red')
//     }
// })

// $optionB.click(function(e) {
//     if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
//         $optionB.css('background-color', 'green');
//     } else {
//         $optionB.css('background-color', 'red')
//     }
// })

// $optionC.click(function(e) {
//     if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
//         $optionC.css('background-color', 'green');
//     } else {
//         $optionC.css('background-color', 'red')
        
//     }
// })

// $optionD.click(function(e) {
//     if (e.target.innerText === codingTriviaArr[0].correctAnswer) {
//         $optionD.css('background-color', 'green');
//     } else {
//         $optionD.css('background-color', 'red')
//     }
// })

// function answerChoice() {
//     if ($optionA.click && (e.target.innerText == correctAnswer) {
//         $optionA.css('background-color', 'red');
//     }
// }

    // console.log($questionsBox.text(triviaQuestions.question))

// Game Object

// class triviaGame {
//     constructor (triviaQuestions, currentQuestion, correct, incorrect) {
//         this.triviaQuestions = triviaQuestions
//         this.currentQuestion = 0
//         this.correct = 0
//         this.incorrect = 0
//     }
// }




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

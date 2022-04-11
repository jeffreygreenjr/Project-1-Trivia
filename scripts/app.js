// console.log("Hello world!")

// Global Variables

let $body = $('.body')

let $homeScreen = $('.homeScreen')
let $gameButton = $('.gameButton')

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

let $clock = $('#clock')
let $scoreNum = $('#scoreNum')
let $strikeNum = $('#strikeNum')

let game = true;
let clock = 1000
let score = 0
let strike = 0






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
        question: "When was the first generation iPhone released?",
        optionA: "1999",
        optionB: "2001",
        optionC: "2007",
        optionD: "2009",
        correctAnswer: "2007",
    },
    {
        question: "When did Tiger Woods win his first Masters?",
        optionA: "1993",
        optionB: "1997",
        optionC: "2001",
        optionD: "2003",
        correctAnswer: "1997",
    },
    {
        question: "Who is the youngest player to win the MVP in the NBA?",
        optionA: "Michael Jordan",
        optionB: "Lebron James",
        optionC: "Derrick Rose",
        optionD: "Kobe Bryant",
        correctAnswer: "Derrick Rose",
    },
    {
        question: "What is the largest ski resort in the US?",
        optionA: "Park City, UT",
        optionB: "Vail, CO",
        optionC: "Lake Tahoe, CA",
        optionD: "Breckinridge, CO",
        correctAnswer: "Park City, UT",
    },
]

let i = 0

$playingScreens.hide()
console.log($playingScreens)

$gameButton.click(function() {
    $homeScreen.hide()
    addContent()
    $playingScreens.show()
    triviaGame()
    $body.css('background-image', 'url()')
})

function triviaGame() {
    
        $optionA.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionA.css('background-color', 'greenyellow');
                $optionA.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
                console.log("Correct");
                score++
                $scoreNum.text(score)
                console.log(`Your score is ${score}`)
            } else {
                $optionA.css('background-color', 'crimson');
                $optionA.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
                console.log("Incorrect");
                game = false;
                strike++
                $strikeNum.text(strike)
                console.log(`Strike ${strike}`)
            }
        })
        $optionB.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionB.css('background-color', 'greenyellow');
                $optionB.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
                console.log("Correct");
                score++
                $scoreNum.text(score)
                console.log(`Your score is ${score}`)
            } else {
                $optionB.css('background-color', 'crimson');
                $optionB.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
                console.log("Incorrect");
                game = false;
                strike++
                $strikeNum.text(strike)
                console.log(`Strike ${strike}`)
            }
        })
        $optionC.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionC.css('background-color', 'greenyellow');
                $optionC.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
                console.log("Correct");
                score++
                $scoreNum.text(score)
                console.log(`Your score is ${score}`)
            } else {
                $optionC.css('background-color', 'crimson');
                $optionC.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
                console.log("Incorrect");
                game = false;
                strike++
                $strikeNum.text(strike)
                console.log(`Strike ${strike}`)
            }
        })
        $optionD.click(function(e) {
            if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
                $optionD.css('background-color', 'greenyellow');
                $optionD.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
                console.log("Correct");
                score++
                $scoreNum.text(score)
                console.log(`Your score is ${score}`)

            } else {
                $optionD.css('background-color', 'crimson');
                $optionD.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
                console.log("Incorrect");
                game = false;
                strike++
                $strikeNum.text(strike)
                console.log(`Strike ${strike}`)
            }
        })
}

// triviaGame()

$nextButton.click(function() {
    if (i < codingTriviaArr.length) {
        // console.log(i)
        i++;
        // console.log(i)
        // triviaGame(i);
        addContent();
        removeAnswerStyling();
        game = true;
    }
})

// When the trivia reaches the end question, create an else statement after the if conditional,
// else if (i === codingTriviaArr.length) {
//     THE END
// }

function addContent() {
    $answersContainer.css('color', 'darkslategrey');
    $questionsBox.text(codingTriviaArr[i].question)
    $optionA.text(codingTriviaArr[i].optionA)
    $optionB.text(codingTriviaArr[i].optionB)
    $optionC.text(codingTriviaArr[i].optionC)
    $optionD.text(codingTriviaArr[i].optionD)
}



function removeAnswerStyling() {
    $optionA.css('background-color', 'plum');
    $optionA.css('box-shadow', '0 0 20px plum, 0 0 30px plum');
    $optionB.css('background-color', 'plum');
    $optionB.css('box-shadow', '0 0 20px plum, 0 0 30px plum');
    $optionC.css('background-color', 'plum');
    $optionC.css('box-shadow', '0 0 20px plum, 0 0 30px plum');
    $optionD.css('background-color', 'plum');
    $optionD.css('box-shadow', '0 0 20px plum, 0 0 30px plum');

    // $answersContainer.text("STRIKE")
    // $answersContainer.css('color', 're')
}



// ----------------------------------------------------------------

// Scrapped js

// loadQuestion()

// function loadQuestion() {
//     addContent()
//         $optionA.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionA.css('background-color', 'greenyellow');
//                 $optionA.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
//                 console.log("Correct")
//             } else {
//                 $optionA.css('background-color', 'crimson');
//                 $optionA.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
//                 // $answersContainer.text("STRIKE")
//                 // $answersContainer.css('color', 'red')
//                 console.log("Incorrect")
//                 game = false;
//             }
//             // removeContent()
//             // addContent()
//             // i++
//         })
//         $optionB.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionB.css('background-color', 'greenyellow');
//                 $optionB.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
//                 console.log("Correct")
//             } else {
//                 $optionB.css('background-color', 'crimson');
//                 $optionB.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
//                 // $answersContainer.text("STRIKE");
//                 // $answersContainer.css('color', 'red');
//                 console.log("Incorrect")
//                 game = false;
//             }
//             // removeContent()
//             // addContent()
//             // i++
//         })
//         $optionC.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionC.css('background-color', 'greenyellow');
//                 $optionC.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
//                 console.log("Correct")
//             } else {
//                 $optionC.css('background-color', 'crimson');
//                 $optionC.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
//                 // $answersContainer.text("STRIKE");
//                 // $answersContainer.css('color', 'red');
//                 console.log("Incorrect")
//                 game = false;
//             }
//             // removeContent()
//             // addContent()
//             // i++
//         })
//         $optionD.click(function(e) {
//             if (e.target.innerText === codingTriviaArr[i].correctAnswer) {
//                 $optionD.css('background-color', 'greenyellow');
//                 $optionD.css('box-shadow', '0 0 20px greenyellow, 0 0 30px greenyellow');
//                 console.log("Correct")
//             } else {
//                 $optionD.css('background-color', 'crimson');
//                 $optionD.css('box-shadow', '0 0 20px crimson, 0 0 30px crimson');
//                 // $answersContainer.text("STRIKE");
//                 // $answersContainer.css('color', 'red');
//                 console.log("Incorrect")
//                 game = false;
//             }
//         })
// }

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

const questions = [
    {
        question: "1. What are the main islands that make up the Maltese archipelago?",
        optionA: "Malta, Gozo, Capri",
        optionB: "Malta, Sicily, Lampedusa",
        optionC: "Malta, Crete, Rhodes",
        optionD: "Malta, Gozo, Comino",
        correctOption: "optionD"
    },

    {
        question: "How does the Malta Discount Card work?",
        optionA: "Provides free access to all attractions",
        optionB: "Offers discounts on selected attractions, restaurants, and services",
        optionC: "Works as a public transport pass",
        optionD: "Can only be used once per location",
        correctOption: "optionB"
    },

    {
        question: "WWhat is the capital city of Malta",
        optionA: "Victoria",
        optionB: "Sliema",
        optionC: " Valletta",
        optionD: "Mdina",
        correctOption: "optionC"
    },

    {
        question: "What kind of discounts can you get with the Malta Discount Card?",
        optionA: "Only on accommodation",
        optionB: "Free museum entries only",
        optionC: " Discounts on attractions, restaurants, and shopping",
        optionD: "Only on public transport",
        correctOption: "optionC"
    },

    {
        question: "What languages are spoken in Malta?",
        optionA: "English and Spanish",
        optionB: "English and French",
        optionC: "English and Italian",
        optionD: "English and Maltese",
        correctOption: "optionD"
    },

    {
        question: "How many people can use a Malta Discount Card?",
        optionA: "1 person",
        optionB: "2 people",
        optionC: "2 adults + 3 children",
        optionD: "4 adults + 9 children",
        correctOption: "optionC"
    },

    {
        question: "What is the traditional Maltese dish that visitors must try?",
        optionA: "Croissant",
        optionB: "Paella",
        optionC: "Pastizzi",
        optionD: "Pizza Margherita",
        correctOption: "optionC"
    },

    {
        question: "What is the name of Malta’s international airport?",
        optionA: "Malta International Airport",
        optionB: "Gozo Airport",
        optionC: "Mdina Airport",
        optionD: "Valletta Airport",
        correctOption: "optionA"
    },

    {
        question: "Is the Malta Discount Card valid for public transportation?",
        optionA: "Only for buses",
        optionB: "Yes, it offers unlimited bus rides",
        optionC: "Only for ferries",
        optionD: "No, it does not include public transport",
        correctOption: "optionD"
    },

    {
        question: "What is the currency used in Malta?",
        optionA: "Lira",
        optionB: "Dollar",
        optionC: "Pound",
        optionD: "Euro",
        correctOption: "optionD"
    },

    {
        question: "How long is the Malta Holiday Discount Card valid after purchase?",
        optionA: "1 month",
        optionB: "1 week",
        optionC: "10 days",
        optionD: "1 day",
        correctOption: "optionC"
    },

    {
        question: "What is the public transportation system like in Malta?",
        optionA: "A network of buses covering the entire country",
        optionB: "Only taxis are available",
        optionC: "A high-speed train between cities",
        optionD: "A metro system with three lines",
        correctOption: "optionA"
    },


    {
        question: "Which Hollywood movies were filmed in Malta?",
        optionA: "Harry Potter and Lord of the Rings",
        optionB: "Gladiator and Troy",
        optionC: "The Godfather and Scarface",
        optionD: "Titanic and Avatar",
        correctOption: "optionB"
    },

    {
        question: "What is Malta surrounded by?",
        optionA: "A forest",
        optionB: "A desert",
        optionC: "Mountains",
        optionD: "The Mediterranean Sea",
        correctOption: "optionD"
    },

    {
        question: "What color is the Maltese flag?",
        optionA: "Red and white",
        optionB: "Black and gold",
        optionC: "Green and orange",
        optionD: "Blue and yellow",
        correctOption: "optionA"
    },

    {
        question: "Can you use the Malta Discount Card for guided tours?",
        optionA: "No, only for transport",
        optionB: "Only for Maltese residents",
        optionC: "Yes, for selected tours",
        optionD: "No, only for shopping",
        correctOption: "optionC"
    },

    {
        question: "What is the most common way to travel around Malta?",
        optionA: "Bus",
        optionB: "Camel",
        optionC: "Bicycle",
        optionD: "Subway",
        correctOption: "optionA"
    },

    {
        question: "What is the name of Malta’s largest beach?",
        optionA: "Ramla Bay",
        optionB: "Paradise Bay",
        optionC: "Golden Bay",
        optionD: "Blue Lagoon",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] 

function handleQuestions() { 
   
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0 
let wrongAttempt = 0 
let indexNumber = 0 



function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })

    
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
          
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
   
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
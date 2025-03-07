const quizData = [
    {
        question: "1. What are the main islands that make up the Maltese archipelago?",
        options: ["a) Malta, Gozo, Comino", "b) Malta, Sicily, Lampedusa", "c) Malta, Crete, Rhodes", "d) Malta, Gozo, Capri"],
        answer: "a) Malta, Gozo, Comino"
    },
    {
        question: "2. How does the Malta Discount Card work?",
        options: ["a) Provides free access to all attractions", "b) Offers discounts on selected attractions, restaurants, and services", "c) Works as a public transport pass", "d) Can only be used once per location"],
        answer: "b) Offers discounts on selected attractions, restaurants, and services"
    },
    {
        question: "3. What is the capital city of Malta?",
        options: ["a) Valletta", "b) Mdina", "c) Sliema", "d) Victoria"],
        answer: "a) Valletta"
    },
    {
        question: "4. What kind of discounts can you get with the Malta Discount Card?",
        options: ["a) Only on accommodation", "b) Only on public transport", "c) Discounts on attractions, restaurants, and shopping", "d) Free museum entries only"],
        answer: "c) Discounts on attractions, restaurants, and shopping"
    }, {
        question: "5. What languages are spoken in Malta?",
        options: ["a) English and Maltese", "b) English and Italian", "c) English and French", "d) English and Spanish"],
        answer: "a) English and Maltese"
    }, {
        question: "6.How many people can use a Malta Discount Card?",
        options: ["a) 1 person", "b) 2 people", "c) 2 adults + 3 children", "d) 4 adults + 9 children"],
        answer: "c) 2 adults + 3 children"

    }, {
        question: "7. What is the traditional Maltese dish that visitors must try? ",
        options: ["a) Pizza Margherita ", "b) Pastizzi", "c) Paella", "d) Croissant"],
        answer: "b) Pastizzi"
    }, {
        question: "8. What is the name of Malta’s international airport?",
        options: ["a) Valletta Airport", "b) Malta International Airport", "c) Mdina Airport", "d) Gozo Airport"],
        answer: "b) Malta International Airport"
    }, {
        question: "9.  Is the Malta Discount Card valid for public transportation?",
        options: ["a) Yes, it offers unlimited bus rides", "b) No, it does not include public transport", "c) Only for ferries", "d) Only for buses"],
        answer: "b) No, it does not include public transport"
    }, {
        question: "10. What is the currency used in Malta?",
        options: ["a) Euro", "b) Dollar", "c) Pound", "d) Lira"],
        answer: "a) Euro"
    }, {
        question: "11.  How long is the Malta Holiday Discount Card valid after purchase?",
        options: ["a) 1 day", "b) 1 week", "c) 1 month", "d) 10 days"],
        answer: "d) 10 days"
    }, {
        question: "12.  What is the public transportation system like in Malta?",
        options: ["a) Only taxis are available", "b) A network of buses covering the entire country", "c) A metro system with three lines ", "d) A high-speed train between cities"],
        answer: "b) A network of buses covering the entire country"
    }, {
        question: "13.  Which Hollywood movies were filmed in Malta?",
        options: ["a) Gladiator and Troy", "b) Titanic and Avatar", "c) The Godfather and Scarface", "d) Harry Potter and Lord of the Rings"],
        answer: "a) Gladiator and Troy"
    }, {
        question: "14. What is Malta surrounded by?",
        options: ["a) A desert", "b) The Mediterranean Sea", " c) Mountains", "d) A forest"],
        answer: "b) The Mediterranean Sea"
    }, {
        question: "15.What color is the Maltese flag? ",
        options: ["a) Red and white", "b) Blue and yellow", "c) Green and orange", "d) Black and gold"],
        answer: "a) Red and white"
    }, {    
        question: "16. Can you use the Malta Discount Card for guided tours? ",
        options: ["a) Yes, for selected tours", "b) No, only for shopping","c) Only for Maltese residents", "d) No, only for transport"], 
        answer: "a) Yes, for selected tours",
    }, {
        question: "17. What is the most common way to travel around Malta? ",
        options: ["a) Bus ", "b) Subway", "c) Bicycle", "d) Camel"],
        answer: "a) Bus"
    }, {
        question: "18.What is the name of Malta’s largest beach? ",
        options: ["a) Paradise Bay", "b) Blue Lagoon", "c) Golden Bay", "d) Ramla Bay"],
        answer: "c) Golden Bay"
    }
    // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();
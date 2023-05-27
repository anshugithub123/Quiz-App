const question = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];

let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("quesBox");
const optionInput = document.querySelectorAll('.option')
const loadQuestions = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = question[index]
    queBox.innerText = `${index + 1} ${data.question}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing the quiz </h3>
    <h2> ${right} / ${total} are Correct</h2>
    `
}

//initial call
loadQuestions();
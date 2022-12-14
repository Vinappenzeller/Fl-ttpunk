function submitForm(e) {
  e.preventDefault();
  location.href = "quiz.html";
}


let question_number = 0;
let points = 0;

const quizbody = document.getElementById("quiz");

window.onload = function () {
  show(question_number);
};


function next() {

  if (question_number == questions.length - 1) {
   
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "stats.html";
  }
  console.log(question_number);

  let user_answer = document.querySelector("li.option.active").innerHTML;

  if (user_answer == questions[question_number].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
    
  }
  else{
    
    location.href = "home.html";
  }
  
  console.log(points);

  question_number++;
  show(question_number);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  active();
}

function active() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

let questions = [
  {
    id: 1,
    question: "Who has won the most Ballon d'Or?",
    answer: "Lionel Messi",
    options: [
      "Lionel Messi",
      "Van Basten",
      "Ronaldo Nazario",
      "Cristiano Ronaldo",
    ],
  },
  {
    id: 2,
    question: "Which nation has won the most world cups?",
    answer: "Brazil",
    options: ["Germany", "Argentina", "Brazil", "Italy"],
  },
  {
    id: 3,
    question: "What Club has won the most Champions Leagues.",
    answer: "Real Madrid",
    options: ["AC Milan", "Bayern München", "Real Madrid", "Liverpool"],
  },
  {
    id: 4,
    question: "What is the Nickname of Roberto Baggio",
    answer: "Il Divin Codino",
    options: ["Taglia Unica", "Il Divin Codino", "La Pulga", "Il Fenomeno"],
  },
  {
    id: 5,
    question: "Which Player has won the most Champions Leagues?",
    answer: "Paco Gento",
    options: [
      "Alessandro Costacurta",
      "Paolo Maldini",
      "Cristiano Ronaldo",
      "Paco Gento",
    ],
  },
  {
    id: 6,
    question: "Which Player has played the most matches?",
    answer: "Peter Shilton",
    options: [
      "Peter Shilton",
      "Roberto Carlos",
      "Gianluigi Buffon",
      "Robert Lewandowski",
    ],
  },
  {
    id: 7,
    question: "Which nation has the longest unbeaten-streak?",
    answer: "Italy",
    options: ["Argentina", "Spain", "Hungary", "Italy"],
  },
  {
    id: 8,
    question: "Who is R9?",
    answer: "Ronaldo Nazario",
    options: [
      "Roberto Carlos",
      "Ronaldo Nazario",
      "Robert Lewandowski",
      "Cristiano Ronaldo",
    ],
  },
];

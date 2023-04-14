var requestUrl = "https://api.rawg.io/api/platforms?key=ac7de14847e84d37be3b60940720db8c"
var gamesUrl = "https://api.rawg.io/api/games?key=ac7de14847e84d37be3b60940720db8c&dates=2019-09-01,2019-09-30&platforms=1"
var testUrl = "https://api.rawg.io/api/games?key=ac7de14847e84d37be3b60940720db8c&parent_platforms=" + choice1 + "&genres=" + choice2
var choice1 = 187 //Playstation 5 (playstation, xbox, nintendo)
var choice2 = "2, 3, 4" //action or shooter
var testUrl = "https://api.rawg.io/api/games?key=ac7de14847e84d37be3b60940720db8c&platforms="
var url2 = "https://api.rawg.io/api/genres?key=ac7de14847e84d37be3b60940720db8c&results=30"
var url3 = "https://api.rawg.io/api/platforms/lists/parents?key=ac7de14847e84d37be3b60940720db8c"
var url4 = "https://api.rawg.io/api/tags?page_size=50&key=ac7de14847e84d37be3b60940720db8c"
var devUrl = "https://api.rawg.io/api/developers?page_size=50&key=ac7de14847e84d37be3b60940720db8c&page=5"

// fetch(url2)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });


// BUTTONS
const startBtn = document.getElementById('start-bttn');
const searchBtn = document.getElementById("search-bttn");
const questionSection = document.getElementById('question-section');
const searchSection = document.getElementById("search-section");
const searchForm = document.getElementById("search-form");
  
// startBtn.addEventListener('click', () => {
//   startBtn.classList.add('hidden');
//   questionSection.classList.remove('hidden');
//   questionSection.style.display='flex';
// });

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  questionSection.style.display = "flex";
  showQuestion();
});

searchBtn.addEventListener("click", function() {
  startBtn.classList.add("hidden");
  questionSection.classList.add("hidden");
  searchSection.style.display='flex'
});

// console.log("----------------------")

// https://api.rawg.io/api?genre=" + genre + ""

const questions = [
  {
    question: "What do you feel like playing on?",
    options: [
      "Playstation",
      "XBOX",
      "Nintendo",
      "PC",
      "Mobile"
    ],
  },
  {
    question: "Good choice! Now are we going solo or looking to play with your friend(s)",
    options: [
      "Solo",
      "Friends",
    ],
  },
  {
    question: "What genre are you in the mood for today/tonight?",
    options: [
      "Action",
      "Adventure",
      "Shooter",
      "RPG",
      "Indie"
    ],
  }
];


const questionContainer = document.getElementById("question");
const optionContainer = document.getElementById("options");
const scoreContainer = document.getElementById("score");

let chosenConsole;
let chosenWayToPlay;
let chosenGenre;

let currentQuestionIndex = 0;

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionContainer.textContent = question.question;

  optionContainer.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    optionContainer.appendChild(button);
    button.addEventListener("click", () => {
      if (option === "Playstation") {
        alert("Playstation")
        chosenConsole = "Playstation"
      }
      else if (option === "XBOX") {
          alert("XBOX");
          chosenConsole = "XBOX";
        }
        else if (option === "Nintendo") {
          alert("Nintendo")
          chosenConsole = "Nintendo";
        }
        else if (option === "PC") {
          alert("PC")
          chosenConsole = "PC";
        }
        else if (option === "Mobile") {
          alert("Mobile")
          chosenConsole = "Mobile";
        }
        else if (option === "Solo") {
          alert("Solo")
          chosenWayToPlay = "Solo!";
        }
        else if (option === "Friends") {
          alert("Friends")
          chosenWayToPlay = "with Friends!";
        }
        else if (option === "Action") {
          alert("Action")
          chosenGenre = "Action!";
        }
        else if (option === "Adventure") {
          alert("Adventure")
          chosenGenre = "Adventure!";
        }
        else if (option === "Shooter") {
          alert("Shooter")
          chosenGenre = "Shooters!";
        }
        else if (option === "RPG") {
          alert("RPG")
          chosenGenre = "RPGs!";
        }
        else if (option === "Indie") {
          alert("Indie")
          chosenGenre = "Indie!";
        }
      currentQuestionIndex++;

      if (currentQuestionIndex === questions.length) {
        showResults();
        alert("My favorite way to game is on " + chosenConsole + " and my favorite way to play is " + chosenWayToPlay + " Also my favorite genre is " + chosenGenre)
      } else {
        showQuestion();
      }
    });
  });
}

function showResults() {
  questionSection.style.display = "none";
}
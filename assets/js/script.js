var requestUrl = "https://api.rawg.io/api/platforms?key=ac7de14847e84d37be3b60940720db8c"
var gamesUrl = "https://api.rawg.io/api/games?key=ac7de14847e84d37be3b60940720db8c&dates=2019-09-01,2019-09-30&platforms=1"
var testUrl = "https://api.rawg.io/api/games?key=ac7de14847e84d37be3b60940720db8c&parent_platforms=" + choice1 + "&genres=" + choice2
var choice1 = 187 //Playstation 5 (playstation, xbox, nintendo)
var choice2 = "2, 3, 4" //action or shooter
var testUrl = ("https://api.rawg.io/api/games?metacritic=80,100&key=ac7de14847e84d37be3b60940720db8c", " https://api.rawg.io/api/games?parent_platforms=2&ordering=-metacritic&key=ac7de14847e84d37be3b60940720db8c")
var url2 = "https://api.rawg.io/api/genres?key=ac7de14847e84d37be3b60940720db8c&results=30"
var url3 = "https://api.rawg.io/api/platforms/lists/parents?key=ac7de14847e84d37be3b60940720db8c"
var url4 = "https://api.rawg.io/api/tags?ordering=name&key=ac7de14847e84d37be3b60940720db8c"
var devUrl = "https://api.rawg.io/api/games/key=ac7de14847e84d37be3b60940720db8c&page=5"
var test2Url = "https://api.rawg.io/api/games?genres=indie&tags=horror&key=ac7de14847e84d37be3b60940720db8c"

fetch(test2Url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


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
        chosenConsole = 2
      }
      else if (option === "XBOX") {
          alert("XBOX");
          chosenConsole = 3;
        }
        else if (option === "Nintendo") {
          alert("Nintendo")
          chosenConsole = 7;
        }
        else if (option === "PC") {
          alert("PC")
          chosenConsole = 1;
        }
        else if (option === "Mobile") {
          alert("Mobile")
          chosenConsole = "4,8";
        }
        else if (option === "Solo") {
          alert("Solo")
          chosenWayToPlay = 31;
        }
        else if (option === "Friends") {
          alert("Friends")
          chosenWayToPlay = 7;
        }
        else if (option === "Action") {
          alert("Action")
          chosenGenre = 4;
        }
        else if (option === "Adventure") {
          alert("Adventure")
          chosenGenre = 3;
        }
        else if (option === "Shooter") {
          alert("Shooter")
          chosenGenre = 2;
        }
        else if (option === "RPG") {
          alert("RPG")
          chosenGenre = 5;
        }
        else if (option === "Indie") {
          alert("Indie")
          chosenGenre = 51;
        }
      currentQuestionIndex++;

      if (currentQuestionIndex === questions.length) {
        showResults();
        // alert("My favorite way to game is on " + chosenConsole + " and my favorite way to play is " + chosenWayToPlay + " Also my favorite genre is " + chosenGenre)
      } else {
        showQuestion();
      }
    });
  });
}

function showResults() {
  questionSection.style.display = "none";
  alert("My favorite way to game is on " + chosenConsole + " and my favorite way to play is " + chosenWayToPlay + " Also my favorite genre is " + chosenGenre)
  var finalUrl = "https://api.rawg.io/api/games?page_size=40&parent_platforms=" + chosenConsole + "&tags=" + chosenWayToPlay + "&genres=" + chosenGenre + "&key=ac7de14847e84d37be3b60940720db8c"

  fetch(finalUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const randomEl = Math.floor(Math.random() * data.results.length)
    const randomEl2 = Math.floor(Math.random() * data.results.length)
    const randomEl3 = Math.floor(Math.random() * data.results.length)
    const randomEl4 = Math.floor(Math.random() * data.results.length)
    const randomEl5 = Math.floor(Math.random() * data.results.length)

    document.getElementById("gameImage").setAttribute("src", data?.results?.[randomEl].background_image);
    document.getElementById("gameImage2").setAttribute("src", data?.results?.[randomEl2].background_image);
    document.getElementById("gameImage3").setAttribute("src", data?.results?.[randomEl3].background_image);
    document.getElementById("gameImage4").setAttribute("src", data?.results?.[randomEl4].background_image);
    document.getElementById("gameImage5").setAttribute("src", data?.results?.[randomEl5].background_image);

    document.getElementById("gameTitle").textContent = data?.results?.[randomEl].name;
    document.getElementById("gameTitle2").textContent = data?.results?.[randomEl2].name;
    document.getElementById("gameTitle3").textContent = data?.results?.[randomEl3].name;
    document.getElementById("gameTitle4").textContent = data?.results?.[randomEl4].name;
    document.getElementById("gameTitle5").textContent = data?.results?.[randomEl5].name;

    const cardDeckEl = document.querySelector(".cardDeck");

    cardDeckEl.style.display = "flex";
  });
}
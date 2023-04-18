var requestUrl = "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=w6w6fWAiC1"
var test3Url = "https://api.boardgameatlas.com/api/search?max_players=2&client_id=w6w6fWAiC1"
var test4Url = "https://api.boardgameatlas.com/api/search?max_players=1&pretty=true&client_id=w6w6fWAiC1"
var test5Url = "https://api.boardgameatlas.com/api/game/categories?pretty=true&client_id=w6w6fWAiC1"
fetch(requestUrl)
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

const questions = [
  {
    question: "So are we going solo or playing with a group of friends?",
    options: [
      "Solo",
      "Friends",
    ],
  },
  {
    question: "Best way to play in my opinion, what are we in the mood for?",
    options: [
      "Card Game",
      "Fantasy",
      "Economic",
      "Sci-Fi",
      "City Building"
    ],
  },
];


const questionContainer = document.getElementById("question");
const optionContainer = document.getElementById("options");
const scoreContainer = document.getElementById("score");

let playerCount;
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
      if (option === "Solo") {
        //alert("Solo")
        playerCount = "max_players=1";
      }
      else if (option === "Friends") {
          //alert("Friends");
          playerCount = "min_players=2";
        }
        else if (option === "Card Game") {
          //alert("Card Game")
          chosenGenre = [{id: "eX8uuNlQkQ"}];
        }
        else if (option === "Fantasy") {
          //alert("Fantasy")
          chosenGenre = [{id: "ZTneo8TaIO"}];
        }
        else if (option === "Econimic") {
          //alert("Economic")
          chosenGenre = [{id: "eX8uuNlQkQ"}];
        }
        else if (option === "Sci-Fi") {
          //alert("Sci-Fi")
          chosenGenre = [{id: "eX8uuNlQkQ"}];
        }
      currentQuestionIndex++;

      if (currentQuestionIndex === questions.length) {
        showResults();
      } else {
        showQuestion();
      }
    });
  });
}

function showResults() {
  questionSection.style.display = "none";
  //alert("My favorite way to game is on " + chosenConsole + " and my favorite way to play is " + chosenWayToPlay + " Also my favorite genre is " + chosenGenre)
  var finalUrl = "https://api.boardgameatlas.com/api/search?" + playerCount + "&" + chosenGenre + "&client_id=w6w6fWAiC1"

  fetch(finalUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const cardDeckEl = document.querySelector(".cardDeck");
    cardDeckEl.style.display = "flex";
    
    const randomEl = Math.floor(Math.random() * data.results.length);
    const randomEl2 = Math.floor(Math.random() * data.results.length);
    const randomEl3 = Math.floor(Math.random() * data.results.length);
    const randomEl4 = Math.floor(Math.random() * data.results.length);
    const randomEl5 = Math.floor(Math.random() * data.results.length);
    const randomEl6 = Math.floor(Math.random() * data.results.length);

    document.getElementById("gameImage").setAttribute("src", data?.results?.[randomEl].background_image);
    document.getElementById("gameImage2").setAttribute("src", data?.results?.[randomEl2].background_image);
    document.getElementById("gameImage3").setAttribute("src", data?.results?.[randomEl3].background_image);
    document.getElementById("gameImage4").setAttribute("src", data?.results?.[randomEl4].background_image);
    document.getElementById("gameImage5").setAttribute("src", data?.results?.[randomEl5].background_image);
    document.getElementById("gameImage6").setAttribute("src", data?.results?.[randomEl6].background_image);

    document.getElementById("gameTitle").textContent = data?.results?.[randomEl].name;
    document.getElementById("gameTitle2").textContent = data?.results?.[randomEl2].name;
    document.getElementById("gameTitle3").textContent = data?.results?.[randomEl3].name;
    document.getElementById("gameTitle4").textContent = data?.results?.[randomEl4].name;
    document.getElementById("gameTitle5").textContent = data?.results?.[randomEl5].name;
    document.getElementById("gameTitle6").textContent = data?.results?.[randomEl6].name;

    function test(){
      document.querySelector(".card").addEventListener("click", function(){
        const h4El = this.querySelector("h4").textContent;
        
          localStorage.setItem((h4El), h4El);
        })
    }

    document.querySelector(".card").addEventListener("click", test())

  });
}




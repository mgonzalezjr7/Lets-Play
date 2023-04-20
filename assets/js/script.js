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
var test2Url = "https://api.rawg.io/api/games?search=Cyberpunk 2077&key=ac7de14847e84d37be3b60940720db8c"

// fetch(test2Url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

// BUTTONS
const startBtn = document.getElementById("start-bttn");
const searchBtn = document.getElementById("search-bttn");
const savedBtn = document.getElementById("saved-bttn");
const gameTypeEl = document.getElementById("gameType");
const videoGameBtn = document.getElementById("videoGame");
const boardGameBtn = document.getElementById("boardGame");
const questionSection = document.getElementById("question-section");
const searchSection = document.getElementById("search-section");
const searchForm = document.getElementById("search-form");
const savedDeck = document.querySelector(".savedCardDeck")
const copyRightEl = document.getElementById("copyRight");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  gameTypeEl.style.display = "flex";
  copyRightEl.style.display = "none";
});

videoGameBtn.addEventListener("click", () => {
  gameTypeEl.style.display = "none";
  questionSection.style.display = "flex";
  showQuestion();
});

boardGameBtn.addEventListener("click", () => {
  gameTypeEl.style.display = "none";
  questionSection.style.display = "flex";
  showBgQuestion();
});

searchBtn.addEventListener("click", function () {
  startBtn.classList.add("hidden");
  questionSection.classList.add("hidden");
  searchSection.style.display = 'flex'
  copyRightEl.style.display = "none";
});

savedBtn.addEventListener("click", function () {
  startBtn.classList.add("hidden");
  document.querySelector(".cardDeck").style.display = "none";
  questionSection.style.display = "none";
  showSaved();
  savedDeck.style.display = "flex";
  copyRightEl.style.display = "none";
});



// QUIZ
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
const cardEl = document.querySelectorAll(".card");

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
        //alert("Playstation")
        chosenConsole = 2
      }
      else if (option === "XBOX") {
        //alert("XBOX");
        chosenConsole = 3;
      }
      else if (option === "Nintendo") {
        //alert("Nintendo")
        chosenConsole = 7;
      }
      else if (option === "PC") {
        //alert("PC")
        chosenConsole = 1;
      }
      else if (option === "Mobile") {
        //alert("Mobile")
        chosenConsole = "4,8";
      }
      else if (option === "Solo") {
        //alert("Solo")
        chosenWayToPlay = 31;
      }
      else if (option === "Friends") {
        //alert("Friends")
        chosenWayToPlay = 7;
      }
      else if (option === "Action") {
        //alert("Action")
        chosenGenre = 4;
      }
      else if (option === "Adventure") {
        //alert("Adventure")
        chosenGenre = 3;
      }
      else if (option === "Shooter") {
        //alert("Shooter")
        chosenGenre = 2;
      }
      else if (option === "RPG") {
        //alert("RPG")
        chosenGenre = 5;
      }
      else if (option === "Indie") {
        //alert("Indie")
        chosenGenre = 51;
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
  var finalUrl = "https://api.rawg.io/api/games?page_size=40&parent_platforms=" + chosenConsole + "&tags=" + chosenWayToPlay + "&genres=" + chosenGenre + "&key=ac7de14847e84d37be3b60940720db8c"

  fetch(finalUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      const cardDeckEl = document.querySelector(".cardDeck");
      cardDeckEl.style.display = "flex";

      for (let i = 1; i <= 6; i++) {
        const randomEl = Math.floor(Math.random() * data.results.length);
        const gameImageEl = document.getElementById(`gameImage${i}`);
        const gameTitleEl = document.getElementById(`gameTitle${i}`);
        const releasedEl = document.querySelector(`.released${i}`);
        const esrbEl = document.querySelector(`.esrb${i}`)
        const metacriticEl = document.querySelector(`.metacritic${i}`)
        if (gameImageEl && gameTitleEl) {
          gameImageEl.setAttribute("src", data?.results?.[randomEl]?.background_image);
          gameTitleEl.textContent = data?.results?.[randomEl]?.name;
          releasedEl.textContent = "Released: " + data?.results?.[randomEl]?.released;
          esrbEl.textContent = "ESRB: " + data?.results?.[randomEl]?.esrb_rating?.name;
          metacriticEl.textContent = "Metascore: " + data?.results?.[randomEl]?.metacritic;
        }
      }

      for (let i = 0; i < cardEl.length; i++) {
        cardEl[i].addEventListener("click", function () {
          const h4El = this.querySelector("h4").textContent;
          localStorage.setItem(h4El, "VG");
        });
      };
    });
}

function showSaved() {
  let savedCards = document.querySelector(".savedCardDeck");

  if (savedCards.children.length === 0) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    let vgValue = "VG";
    let bgValue = "BG";
    

    if (value === vgValue) {
      let savedVideoGame = key;
      let savedVgUrl = "https://api.rawg.io/api/games?search=" + savedVideoGame + "&key=ac7de14847e84d37be3b60940720db8c";

      fetch(savedVgUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let savedCard = document.createElement("div");
        savedCard.classList.add("savedCard");
        savedCard.innerHTML = `<img src="${data.results[0].background_image}" id="savedImage${i}">
        <h4 id="savedTitle${i}">${data.results[0].name}</h4>
        <p class="p1 released">Released: ${data.results[0].released}</p> 
        <p class="p2 esrb">ESRB: ${data.results[0].esrb_rating?.name}</p> 
        <p class="p3 metacritic">Metascore: ${data.results[0].metacritic}</p>`;

        savedCards.appendChild(savedCard);
      });

    } else if (value === bgValue) {
      let savedBoardGame = key;
      let savedBgUrl = "https://api.boardgameatlas.com/api/search?name=" + savedBoardGame + "&client_id=w6w6fWAiC1";
    
      fetch(savedBgUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let savedCard = document.createElement("div");
        savedCard.classList.add("savedCard");
        savedCard.innerHTML = `<img src="${data.games[0].image_url}" id="savedImage${i}">
        <h4 id="savedTitle${i}">${data.games[0].name}</h4>
        <p class="p1 released">Released: ${data.games[0].year_published}</p> 
        <p class="p2 esrb">ESRB: ${data.games[0].price}</p> 
        <p class="p3 metacritic">Metascore: ${data.games[0].players}</p>`;

        savedCards.appendChild(savedCard);
      });
    };
  }};
};
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
// const startBtn = document.getElementById('start-bttn');
// const searchBtn = document.getElementById("search-bttn");
// const questionSection = document.getElementById('question-section');
// const searchSection = document.getElementById("search-section");
// const searchForm = document.getElementById("search-form");
  
// startBtn.addEventListener('click', () => {
//   startBtn.classList.add('hidden');
//   questionSection.classList.remove('hidden');
//   questionSection.style.display='flex';
// });

// startBtn.addEventListener("click", () => {
//   startBtn.style.display = "none";
//   questionSection.style.display = "flex";
//   showBgQuestion();
// });

// searchBtn.addEventListener("click", function() {
//   startBtn.classList.add("hidden");
//   questionSection.classList.add("hidden");
//   searchSection.style.display='flex'
// });

const bgQuestions = [
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


// const questionContainer = document.getElementById("question");
// const optionContainer = document.getElementById("options");
// const scoreContainer = document.getElementById("score");

let playerCount;
let chosenBgGenre;

let currentBgQuestionIndex = 0;

function showBgQuestion() {
  const question = bgQuestions[currentBgQuestionIndex];
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
          chosenBgGenre = [{id: "eX8uuNlQkQ"}];
        }
        else if (option === "Fantasy") {
          //alert("Fantasy")
          chosenBgGenre = [{id: "ZTneo8TaIO"}];
        }
        else if (option === "Econimic") {
          //alert("Economic")
          chosenBgGenre = [{id: "eX8uuNlQkQ"}];
        }
        else if (option === "Sci-Fi") {
          //alert("Sci-Fi")
          chosenBgGenre = [{id: "eX8uuNlQkQ"}];
        }
      currentBgQuestionIndex++;

      if (currentBgQuestionIndex === bgQuestions.length) {
        showBgResults();
      } else {
        showBgQuestion();
      }
    });
  });
}

function showBgResults() {
  questionSection.style.display = "none";
  //alert("My favorite way to game is on " + chosenConsole + " and my favorite way to play is " + chosenWayToPlay + " Also my favorite genre is " + chosenBgGenre)
  var finalUrl = "https://api.boardgameatlas.com/api/search?" + playerCount + "&" + chosenBgGenre + "&client_id=w6w6fWAiC1"

  fetch(finalUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const cardDeckEl = document.querySelector(".cardDeck");
    cardDeckEl.style.display = "flex";
    
    const randomEl = Math.floor(Math.random() * data.games.length);
    const randomEl2 = Math.floor(Math.random() * data.games.length);
    const randomEl3 = Math.floor(Math.random() * data.games.length);
    const randomEl4 = Math.floor(Math.random() * data.games.length);
    const randomEl5 = Math.floor(Math.random() * data.games.length);
    const randomEl6 = Math.floor(Math.random() * data.games.length);

    document.getElementById("gameImage1").setAttribute("src", data?.games?.[randomEl]?.image_url);
    document.getElementById("gameImage2").setAttribute("src", data?.games?.[randomEl2]?.image_url);
    document.getElementById("gameImage3").setAttribute("src", data?.games?.[randomEl3]?.image_url);
    document.getElementById("gameImage4").setAttribute("src", data?.games?.[randomEl4]?.image_url);
    document.getElementById("gameImage5").setAttribute("src", data?.games?.[randomEl5]?.image_url);
    document.getElementById("gameImage6").setAttribute("src", data?.games?.[randomEl6]?.image_url);

    document.getElementById("gameTitle1").textContent = data?.games?.[randomEl].name;
    document.getElementById("gameTitle2").textContent = data?.games?.[randomEl2].name;
    document.getElementById("gameTitle3").textContent = data?.games?.[randomEl3].name;
    document.getElementById("gameTitle4").textContent = data?.games?.[randomEl4].name;
    document.getElementById("gameTitle5").textContent = data?.games?.[randomEl5].name;
    document.getElementById("gameTitle6").textContent = data?.games?.[randomEl6].name;

    function test(){
      document.querySelector(".card").addEventListener("click", function(){
        const h4El = this.querySelector("h4").textContent;
        
          localStorage.setItem((h4El), h4El);
        })
    }

    document.querySelector(".card").addEventListener("click", test())

  });
}




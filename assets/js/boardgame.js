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
        playerCount = "max_players=1";
      }
      else if (option === "Friends") {
          playerCount = "min_players=2";
        }
        else if (option === "Card Game") {
          chosenBgGenre = [{id: "eX8uuNlQkQ"}];
        }
        else if (option === "Fantasy") {
          chosenBgGenre = [{id: "ZTneo8TaIO"}];
        }
        else if (option === "Econimic") {
          chosenBgGenre = [{id: "eX8uuNlQkQ"}];
        }
        else if (option === "Sci-Fi") {
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

  var finalUrl = "https://api.boardgameatlas.com/api/search?" + playerCount + "&" + chosenBgGenre + "&limit=100&client_id=w6w6fWAiC1"

  fetch(finalUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    const cardDeckEl = document.querySelector(".cardDeck");
    cardDeckEl.style.display = "flex";

    for (let i = 1; i <= 6; i++) {
      const randomEl = Math.floor(Math.random() * data.games.length);
      const gameImageEl = document.getElementById(`gameImage${i}`);
      const gameTitleEl = document.getElementById(`gameTitle${i}`);
      const releasedEl = document.querySelector(`.released${i}`);
      const esrbEl = document.querySelector(`.esrb${i}`)
      const metacriticEl = document.querySelector(`.metacritic${i}`)
      if (gameImageEl && gameTitleEl) {
        gameImageEl.setAttribute("src", data?.games?.[randomEl]?.image_url);
        gameTitleEl.textContent = data?.games?.[randomEl]?.name;
        releasedEl.textContent = "Released: " + data?.games?.[randomEl]?.year_published;
        esrbEl.textContent = "Play Time: " + data?.games?.[randomEl]?.playtime + " Minutes";
        metacriticEl.textContent = "Players: " + data?.games?.[randomEl]?.players;
      }
    }

    for (let i = 0; i < cardEl.length; i++) {
      cardEl[i].addEventListener("click", function () {
        const h4El = this.querySelector("h4").textContent;
        localStorage.setItem(h4El, "BG");
      });
    }
  });
}
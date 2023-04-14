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

fetch(url2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });


  // BUTTONS
  const startBtn = document.getElementById('start-bttn');
  const questionSection = document.getElementById('question-section');
  
  startBtn.addEventListener('click', () => {
    startBtn.classList.add('hidden');
    questionSection.classList.remove('hidden');
    questionSection.style.display='flex';
  });
   
// console.log("----------------------")

// https://api.rawg.io/api?genre=" + genre + ""


const questions = [{
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
},
];



//This function can be used for the start button on the home page
// function letGameBegin() {
//   var startBtnEl = document.querySelector("#start-bttn")
//   startBtnEl.addEventListener("click", function() {
//   showQuestion();
//   })
// }

// function showQuestion() {
//       const question = questions[currentQuestion];
//       let html = `
//       <h2>${question.question}</h2>
//       <ul>
//       `;
//       for (let option of question.options) {
//           html +=
//           `<li><button onclick="checkAnswer('${option}')">${option}</button></li>`
//           ;
//       }
//       html += "</ul>";
// }



// function checkAnswer(answer) {
//   const question = questions[currentQuestion];
//   if (answer === questions[currentQuestion].answer) {
//       score++;
//       currentQuestion++;
//       if(currentQuestion >= questions.length) {
//           clearInterval(timerId);
//           showGameOver();
//       } else {
//           showQuestion();
//       }
//   } else {
//       timeLeft -= 15;
//       if(timeLeft <= 0) {
//           clearInterval(timerId);
//           showGameOver();
//       } else {
//           showQuestion();
//       }
//   }
//   if (answer === question.answer) {
//       score++;
//   }
//   currentQuestion++;
//   if (currentQuestion === questions.length) {
//       showGameOver();
//   } else {
//       showQuestion();
//   }
// }

// function sendGame() {
//   const html = `<h2>Results</h2><p>You got ${score} out of ${questions.length} questions correct.</p><button onclick="letGameBegin()">Play Again</button>`;
//   document.getElementById("Game").innerHTML = html;
// }
// letGameBegin();
// let timerId = setInterval(updateTimer, 1000);
  

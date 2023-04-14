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
  

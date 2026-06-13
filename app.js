const app = document.querySelector(".card");

document.getElementById("startBtn").addEventListener("click", () => {

app.innerHTML = `

<h2>Question 1 of 7</h2>

<p>What are you studying?</p>

<button onclick="nextQuestion('Inter')">Inter</button>

<button onclick="nextQuestion('Degree')">Degree</button>

<button onclick="nextQuestion('B.Tech')">B.Tech</button>

<button onclick="nextQuestion('Other')">Other</button>

`;

});

function nextQuestion(answer){

alert(
"You selected: " + answer +
"\n\nGreat! Next we'll ask about your dream career."
);

}

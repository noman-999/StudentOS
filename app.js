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



let current = 0;

function nextQuestion(answer){

if(current < questions.length){

alert(

"Answer saved: " + answer +

"\n\nNext Question:\n\n" +

questions[current]

);

current++;

}else{

alert(

"🎉 StudentOS will now generate your roadmap!"

);

}

}

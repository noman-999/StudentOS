const app = document.querySelector(".card");

let currentQuestion = 0;

function showQuestion() {

    const q = questions[currentQuestion];

    let html = `<h2>${q.question}</h2>`;

    if (q.options) {

        q.options.forEach(option => {

            html += `
            <button onclick="saveAnswer('${option}')">
            ${option}
            </button>
            `;

        });

    } else {

        html += `
        <input id="textAnswer" placeholder="Type your answer">

        <button onclick="saveTextAnswer()">
        Next
        </button>
        `;
    }

    app.innerHTML = html;

}

document.getElementById("startBtn").addEventListener("click", showQuestion);

function saveAnswer(answer){

    studentAnswers[questions[currentQuestion].id] = answer;

    next();

}

function saveTextAnswer(){

    const value = document.getElementById("textAnswer").value;

    studentAnswers[questions[currentQuestion].id] = value;

    next();

}

function next(){

    currentQuestion++;

    if(currentQuestion < questions.length){

        showQuestion();

    }else{

        app.innerHTML = `

<h2>🎓 StudentOS Report</h2>

<h3>👋 Welcome Future Professional</h3>

<p><b>🎯 Next Best Step</b></p>

<p>
Start building one skill consistently every day.
</p>

<hr>

<p><b>📚 Top Skills</b></p>

<ul>
<li>Python</li>
<li>Problem Solving</li>
<li>Communication</li>
</ul>

<hr>

<p><b>📅 Today's Task</b></p>

<p>
Spend 25 minutes learning Python basics.
</p>

<hr>

<p><b>🔥 Motivation</b></p>

<p>
Small daily actions create big careers.
</p>

`;
    }

}

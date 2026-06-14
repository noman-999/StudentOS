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
        <h2>🎉 StudentOS Report</h2>

        <p>Your journey has started!</p>

        <pre>${JSON.stringify(studentAnswers,null,2)}</pre>
        `;
    }

}

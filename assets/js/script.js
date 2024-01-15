import { ROUND1_QUESTIONS, ROUND2_QUESTIONS, ROUND3_QUESTIONS } from "./questions.js";
import { ROUND1_ANSWERS, ROUND2_ANSWERS } from "./answers.js";

let roundNumber = 1;
const questionAnswerKeys = {}

$(function () {
  renderRound1();
});

const renderAnniversary = () => {
  const startMonth = 1;
  const startDate = 15;
  const startYear = 2022;

  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const year = today.getFullYear();

  let yearCount;

  // If today matches the date of our anniversary
  if (startMonth === month && startDate === date) {
    yearCount = year - startYear;
  } else {
    // Subtract by 1 year since it's not the anniversary date yet.
    yearCount = (year - 1) - startYear;
  }

  $("title").text(`Happy ${yearCount} year Anniversary!`);
  $("#title").text(`Happy ${yearCount} year Anniversary!`);
  $("main").html(
    `<section>
      <h2>Here's to another year with the best partner ever!!</h2>
      <p>I love you so much baby 😚 and I love eeeeevery second being with you! Here's a video of ${year - 1} together</p>
      <br>
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JSgyVs4GHtI?si=scXprVeMwSjf1Mt5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </section>`
  )
}

const getRandomQuestion = (questions) => {
  const questionValues = Object.values(questions);
  const questionKeys = Object.keys(questions);
  const randomKey = Math.floor(Math.random() * questionKeys.length);
  questionAnswerKeys[roundNumber] = questionKeys[randomKey]; // Save the question key to get the corresponding answer later.
  return questionValues[randomKey];
}

const checkAnswer = (answer) => {
  let answers;

  switch (roundNumber) {
    case 1:
      answers = ROUND1_ANSWERS[questionAnswerKeys[roundNumber]];
      return answers.includes(answer.toLowerCase());
    case 2:
      answers = ROUND2_ANSWERS[questionAnswerKeys[roundNumber]];
      return answers.includes(answer.toLowerCase());
    case 3:
      return true;
  }
}

const renderRound1 = () => {
  $("main").html(
    `<section id="round1">
      <h2>${getRandomQuestion(ROUND1_QUESTIONS)}</h2>
      <form id="question1" action="">
        <input id="answer1" type="text" placeholder="Type here">
        <div class="button-group">
          <button id="reload-question" class="button-new-question" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-counterclockwise custom-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/></svg>
          </button>
          <button id="answer-round-1" class="button-next-round" type="submit">Check Answer</button>
        </div>
      </form>
    </section>`
  )

  $("#answer1").focus();
}

const renderRound2 = () => {
  $("main").html(
    `<section id="round2">
      <h2 id="question2">${getRandomQuestion(ROUND2_QUESTIONS)}</h2>
      <form id="question2" action="">
        <input id="answer2" placeholder="Type here">
        <div class="button-group">
          <button id="reload-question" class="button-new-question" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-counterclockwise custom-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/></svg>
          </button>
          <button id="answer-round-2" class="button-next-round" type="submit">Next Question</button>
        </div>
      </form>
    </section>`
  )

  $("#answer2").focus();
}

const renderRound3 = () => {
  $("main").html(
    `<section id="round3">
      <h2 id="question3">${getRandomQuestion(ROUND3_QUESTIONS)}</h2>
      <form id="question3" action="">
        <input id="answer3" placeholder="Type here">
        <div class="button-group">
          <button id="reload-question" class="button-new-question" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-arrow-counterclockwise custom-arrow" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/></svg>
          </button>
          <button id="answer-round-3" class="button-next-round" type="submit">What's Next?...</button>
        </div>
      </form>
    </section>`
  )
  $("#answer3").focus();
}

$("main").on("submit", "#question1", function (event) {
  event.preventDefault();
  const answer = $("#answer1").val();
  if (!answer) alert("Answer can't be blank")
  const isCorrect = checkAnswer(answer, "#question1");

  if (isCorrect) {
    roundNumber++;
    renderRound2();
  } else {
    if ($(".wrong-answer")) return; // Prevent rendering this text multiple times

    $("#answer1").after(
      `<p class="wrong-answer"><b>*Please try again</b></p>`
    )
  }
});

$("main").on("submit", "#question2", function (event) {
  event.preventDefault();
  const answer = $("#answer2").val();
  const isCorrect = checkAnswer(answer);

  if (isCorrect) {
    roundNumber++;
    renderRound3();
  } else {
    if ($(".wrong-answer")) return; // Prevent rendering this text multiple times

    $("#answer1").after(
      `<p class="wrong-answer"><b>*Please try again</b></p>`
    )
  }
});

$("main").on("submit", "#question3", function (event) {
  event.preventDefault();
  // There's no wrong answer here
  renderAnniversary();
});



$("main").on("click", "#reload-question", function (event) {
  event.preventDefault();
  let newQuestions;

  switch (roundNumber) {
    case 1:
      newQuestions = getRandomQuestion(ROUND1_QUESTIONS);
      break;

    case 2:
      newQuestions = getRandomQuestion(ROUND2_QUESTIONS);
      break;

    case 3:
      newQuestions = getRandomQuestion(ROUND3_QUESTIONS);
      break;
  }

  // replace the current question with a new one
  $(`#round${roundNumber}`).children("h2").text(newQuestions);
});
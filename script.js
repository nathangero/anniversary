import { correctR1, correctR2, correctR3 } from "./flags.js";
import { ROUND1, ROUND2, ROUND3 } from "./questions.js";


$(function () {
  calcAnniversary();
  renderRound1();
  renderRound2();
  renderRound3();
});

const calcAnniversary = () => {
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

  $("#title").text(`Happy ${yearCount} year Anniversary!`);
}

const renderRound1 = () => {
  $("#question1").text(correctR1 ? "Correct" : "Incorrect");
  const question = $("#start-round-2");
}

const unrenderRound1 = () => {
  $("#round1").text("");
}

const renderRound2 = () => {
  $("#question2").text(correctR2 ? "Correct" : "Incorrect");
}

const unrenderRound2 = () => {
  $("#round2").text("");
}

const renderRound3 = () => {
  $("#question3").text(correctR3 ? "Correct" : "Incorrect");
}

const unrenderRound3 = () => {
  $("#round3").text("");
}

$("#start-round-2").click(function (e) {
  unrenderRound1();
});

$("#start-round-3").click(function (e) {

});

$("#start-what-next").click(function (e) {

});
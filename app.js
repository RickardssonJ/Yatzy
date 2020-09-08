let rowOne = document.getElementsByClassName("rowOneNum");
let dice = document.getElementById("diceBtn");
let calc = document.getElementById("calcBtn");

let totalOne = document.getElementById("totalOne");

// dice.addEventListener("click", function (e) {
//   console.log(rowOne[0].value);
// });

calc.addEventListener("click", function () {
  let sum = 0;
  sum += rowOne[0].valueAsNumber;
  sum += rowOne[1].valueAsNumber;
  sum += rowOne[2].valueAsNumber;
  sum += rowOne[3].valueAsNumber;
  sum += rowOne[4].valueAsNumber;
  sum += rowOne[5].valueAsNumber;
  sum += rowOne[6].valueAsNumber;
  sum += rowOne[7].valueAsNumber;
  sum += rowOne[8].valueAsNumber;
  sum += rowOne[9].valueAsNumber;
  sum += rowOne[10].valueAsNumber;
  sum += rowOne[11].valueAsNumber;
  sum += rowOne[12].valueAsNumber;

  console.log(sum);
});

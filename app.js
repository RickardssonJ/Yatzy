let rowOne = document.getElementsByClassName("rowOneNum");
let dice = document.getElementById("diceBtn");
let calc = document.getElementById("calcBtn");

let totalOne = document.getElementById("totalOne");

// dice.addEventListener("click", function (e) {
//   console.log(rowOne[0].value);
// });

calc.addEventListener("click", function () {
  let sum = 0;

  for (let i = 0; i <= 12; i++) {
    sum += rowOne[i].valueAsNumber;
    totalOne.value = sum;
  }

  console.log(sum);
});

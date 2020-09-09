let rowOne = document.getElementsByClassName("rowOneNum");
let dice = document.getElementById("diceBtn");
let calc = document.getElementById("calcBtn");
let totalOne = document.getElementById("totalOne");
let bonusOne = document.getElementById("bonusOne");
let sumOne = document.getElementById("sumOne");

calc.addEventListener("click", function () {
  let sum = 0;
  let sumPlayerOne = 0;

  for (let i = 0; i <= 12; i++) {
    sum += rowOne[i].valueAsNumber;
    if (sum >= 63) {
      bonusOne.value = 50;
    }
  }

  for (let i = 0; i <= 5; i++) {
    sumPlayerOne += rowOne[i].valueAsNumber;
    sumOne.value = sumPlayerOne;
  }

  sum += Number(bonusOne.value);
  totalOne.value = sum;
  console.log(sum);
});

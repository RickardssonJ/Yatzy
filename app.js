let rowOne = document.getElementsByClassName("rowOneNum");
//let dice = document.getElementById("diceBtn");
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

function dice() {
  let throws = [];
  let diceTr = 0;
  for (let i = 0; i <= 5; i++) {
    diceTr = Math.floor(Math.random() * 6) + 1;
    throws.push(diceTr);
  }

  return fullHouse(throws);
}

//array [1,2,3,4,5]

function fullHouse(throws) {
  let countOne = 0;
  let countTwo = 0;
  let countThree = 0;
  let countFour = 0;
  let countFive = 0;
  let countSix = 0;
  let arry = [];

  throws.forEach((number) => {
    arry[number]++;
  });

  console.log(arry);
}

dice();

let rowOne = document.getElementsByClassName("rowOneNum");

//let dice = document.getElementById("diceBtn");
let calc = document.getElementById("calcBtn");
let totalOne = document.getElementById("totalOne");
let bonusOne = document.getElementById("bonusOne");
let sumOne = document.getElementById("sumOne");

let sum=0

for (input of rowOne){

  input.addEventListener("keyup", function(e){
    sum+=Number(e.target.value)
    sumOne.value= sum
  })
}



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


/// Roll dice function and full house checker
function rollDice() {

  let throws = [];
  let diceThrow = 0;
  for (i = 0; i < 5; i++) {
    diceThrow = Math.floor(Math.random() * 6) + 1;
    throws.push(diceThrow);
  }
  return throws;
}

let dices = rollDice();

function countDice(dices) {
  let values = [];

  for (let i = 0; i <= 6; i++) {
    values[i] = 0;
  }

// dices = [0,1,1,3,5]
// value = [1,2,0,1,1,0]  vi loopar
// loop1 : [0,1,0,0,0,0]
// loop2 : [0,2,0,0,0,0]
// loop3 : [0,3,0,0,0,0]
// loop4 : [0,3,0,1,0,0]
// loop5 : [0,3,0,1,1,0]

  for (let current_dice of dices) {
    values[current_dice]++;
  }
  console.log(values);
  if (values.includes(2) && values.includes(3)) {
    alert("You got full house!");
    console.log("You got full house!");
    return true;
  } else {
    console.log("No full house this round.");
    return false;
  }
}

countDice(dices);

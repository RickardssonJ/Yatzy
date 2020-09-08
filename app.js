let rowOne = document.getElementsByClassName("rowOneNum");

let dice = document.getElementById("diceBtn");

dice.addEventListener("click", function () {
  console.log(rowOne[0].value);
});

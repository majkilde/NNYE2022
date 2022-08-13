function RunDiceGame1(numberOfRolls = 100000) {
  var numberOfSixes = RollSix(numberOfRolls);
  var probability = (numberOfSixes / numberOfRolls) * 100;
  var msg =
    "Fik " +
    numberOfSixes +
    " seksere på " +
    numberOfRolls +
    " kast, svarende til " +
    probability.toFixed(4) +
    "%";
  alert(msg);
}

function RunDiceGame2(
  numberOfRolls = 1000000,
  numberOfDices = 6,
  numberOfSixes = 2
) {
  var result = 0; //antal kast der indeholder mindst x antal seksere
  for (var i = 1; i <= numberOfRolls; i++) {
    // Roll n number of dices and count the sixes
    cnt = RollSix(numberOfDices);
    if (cnt >= numberOfSixes) result++;
  }
  var probability = (result / numberOfRolls) * 100;
  var msg =
    "Kastede " +
    numberOfRolls +
    " med " +
    numberOfDices +
    " terninger. Fik " +
    result +
    " gange mindst " +
    numberOfSixes +
    " seksere, svarende til " +
    probability.toFixed(4) +
    "%";
  alert(msg);
}

function RunDiceGame3(numberOfRolls = 100) {
  var longestStreak = RollSixInaRow(numberOfRolls);
  var msg =
    "Fik maksimalt " +
    longestStreak +
    " seksere i træk på " +
    numberOfRolls +
    " kast";
  alert(msg);
}

// Ruller én terning numberOfRolls gange
// Returnerer antallet af seksere
function RollSix(numberOfRolls) {
  var result = 0;
  for (var i = 1; i <= numberOfRolls; i++) {
    if (Roll() == 6) result++;
  }
  return result;
}

// Ruller én terning numberOfRolls gange
// Returnerer det masimale antal af seksere i træk
function RollSixInaRow(numberOfRolls) {
  var cnt = 0;
  var result = 0;
  for (var i = 1; i <= numberOfRolls; i++) {
    if (Roll() == 6) {
      cnt++;
    } else {
      if (cnt > result) result = cnt;
      cnt = 0;
    }
  }
  return result;
}

function Roll() {
  var f = Math.random();
  var i = Math.floor(f * 6) + 1;
  return i;
}

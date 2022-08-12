function RunGame() {
  var result = GetRandom();
  var cnt = 0;
  var guess = Ask("Indtast dit gæt #" + ++cnt);
  while (guess != result) {
    var hint = guess > result ? "For højt" : "For lavt";
    console.log(cnt, "Der blev gættet på " + guess);
    guess = Ask(hint + ": Indtast dit gæt #" + ++cnt);
  }

  alert("Tillykke - du klarede det i " + cnt + " gæt");
}

function GetRandom(max = 100) {
  var f = Math.random();
  console.log(f);
  var i = Math.floor(f * max) + 1;
  console.log(f, i);
  return i;
}

function Ask(msg) {
  return Number(window.prompt(msg));
}

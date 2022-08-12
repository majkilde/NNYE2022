function RunGame() {
  var result = GetRandom();
  var cnt = 0;
  var guess = Number(window.prompt("Indtast dit gæt #"+cnt++));
  console.log( cnt, "Der blev gættet på " + guess);
}

function GetRandom(max = 100) {
  var f = Math.random();
  console.log(f);
  var i = Math.floor(f * max) + 1;
  console.log(f, i);
  return i;
}

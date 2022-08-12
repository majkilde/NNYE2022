function RunGame() {
  var result = GetRandom();
}

function GetRandom(max = 100) {
  var f = Math.random();
  console.log(f);
  var i = Math.floor(f * max) + 1;
  console.log(f, i);
  return i;
}

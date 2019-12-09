function XO(str) {
  var x = 0;
  var o = 0;
  str.split("").map(letter => {
    if (letter === "X" || letter === "x") {
      x++;   
    } else if (letter === 'O' || letter === 'o') {
      o++;
    }
  });
  if (x === o) {
    return true;
  }
  return false;
}
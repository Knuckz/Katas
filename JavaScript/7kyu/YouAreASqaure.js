var isSquare = function(n){
if (n < 0) {
  return false;
} else {
    myPretty = Math.sqrt(n)
    if (Number.isInteger(myPretty)) {
      return true;
    }
  }
  return false; // fix me
}
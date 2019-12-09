function digital_root(n) {
  let total = 0;
  let myString = n.toString();
  if (myString.length == 1) {
    return n;
  }
  for (let i = 0; i < myString.length; i++) {
    total += parseInt(myString[i]);
  }
  return digital_root(total);
}
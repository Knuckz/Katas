function sumDigPow(a, b) {
  let result = [];
  for (a; a < b; a++) {
    let num = a.toString().split("");
    let total = 0;
    for (let i = 0; i < num.length; i++) {
      total += Math.pow(parseInt(num[i]), i + 1)
      if (total == a) {
        result.push(a);
      }
    }
  }
  return result;
}
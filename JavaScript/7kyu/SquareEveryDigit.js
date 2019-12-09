function squareDigits(num){
  let result = '';
  let newString = num.toString();
  
  for (let i = 0; i < newString.length; i++) {
    result += newString[i] * newString[i];
  }
  
  return parseInt(result);
}
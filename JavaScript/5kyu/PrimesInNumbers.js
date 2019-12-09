class myPair  {
  constructor(low, high) {
    this.low = low;
    this.high = high;
  }
}

function isPrime(n) {
  for (let i = 0; i < n; i++) {
    if (n % i) {
      return false;
    }
  }
    return n > 1;
}

function findGCD(n) {
  let square = Math.sqrt(n);
  if (square === Math.floor(n)) {
    findGCD(square);
    findGCD(square);
  } else {
    let low = Math.floor(square);
    let high = Math.ceil(square);
    match = findDenom(low, high, n);
    let higher = match.high;

    if (match.low != -1) {
      findGCD(match.low);
    } 
    if (higher != -1) {
      findGCD(higher);
    }
  }
}

function findDenom(low, high, n) {
  if (isPrime(n)) {
    myArray.push(n);
    return new myPair(-1, -1);
  }
  while (low > 1) {
    if (low * high === n) {
    return new myPair(low, high);
    }
    
    else if (low * high > n) {
      low--;
    }
    else if (low * high < n) {
      high++;
    }
  }

  myArray.push(n);
  return new myPair(-1, -1);
}

  var myArray = [];
function primeFactors(n){
  let myString = '';
  myArray = [];
  findGCD(n);
  
  sortedArray = myArray.sort((a,b) => a-b);

  for (let i = 0, count = 0; i < sortedArray.length; i += count) {
    count = 0;
    temp = sortedArray[i];
    for (let x = 0; x < sortedArray.length; x++) {
      if (temp === sortedArray[x]) {
        count++;
      }
    }
    if (count > 1) {
      myString += "(" + sortedArray[i] + "**" + count + ")";
    } else
      myString += "(" + sortedArray[i] + ")";
  }
  return myString;
}
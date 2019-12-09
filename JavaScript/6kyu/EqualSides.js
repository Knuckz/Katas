function sum(sum, num) {
  return sum + num;
}

function findEvenIndex(arr)
{
  if (arr.reduce(sum) == 0) 
    return 0;
  if (arr.length === 1) 
    return 0
  for (let i = 1; i <= arr.length; i++) {
   if (arr.slice(0, i).reduce(sum) === arr.slice(i-1, arr.length).reduce(sum)) {
     return i - 1;
   }
  }
  return -1;
}
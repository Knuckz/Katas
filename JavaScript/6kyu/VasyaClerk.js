function tickets(peopleInLine){
  let low = 0;
  let med = 0;
  let high = 0;
  
  for (people of peopleInLine) {
    if (people == 25) {
      low++;
    }
    if (people == 50) {
      med++;
      if (low < 1) {
        return "NO";
      }
      low--;
    }
    if (people == 100) {
      high++;
      if (med > 0 && low > 0) {
        med--;
        low--;
      } else if (low > 2) {
        low -= 3;
      } else {
        return "NO"
      }
    }  
  }
  return "YES"
}
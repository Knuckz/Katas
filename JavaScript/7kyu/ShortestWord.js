function findShort(s){
  let minLength = s.length;

  s.split(' ').map(x => {
    if (x.length < minLength) {
      minLength = x.length;
    }
  })
  return minLength;
}
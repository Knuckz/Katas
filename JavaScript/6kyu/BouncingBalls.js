function bouncingBall(h,  bounce,  window) {
  let result = 1; 
  if (!(h >0 && bounce > 0 && bounce < 1 && h > window)) {
    return -1;
  }

  while(h > window) {
    h = h * bounce
    if (h > window) 
      result += 2;
  }
  return result;
}
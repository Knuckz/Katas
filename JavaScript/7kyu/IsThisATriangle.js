function isTriangle(a,b,c)
{
  if (a + b <= c) {
    return false;
  } else if (a + c <= b) {
    return false;
  } else if (b + c <= a) {
    return false;
  }
  console.log(a + " " + b + " " + c)
  return true;
}
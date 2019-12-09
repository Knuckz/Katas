#include <algorithm>

template<class TYPE>
int getLengthOfMissingArray(std::vector<std::vector<TYPE>> arrayOfArrays)
{ 
  //bubble sort
  for (int i = 0; i < arrayOfArrays.size(); i++)
  {
    for (int j = 0; j < arrayOfArrays.size() - 1; j++)
    {
      if (arrayOfArrays[j].size() > arrayOfArrays[j + 1].size())
      {
        std::vector<TYPE> temp = arrayOfArrays[j +1];
        arrayOfArrays[j+1] = arrayOfArrays[j];
        arrayOfArrays[j] = temp;
      }
    }
  }
  
  //Check special cases
  if (arrayOfArrays.size() <= 0 || arrayOfArrays[0].size() == 0)
  {
    return 0;
  }
  
  //Find the missing array
  for (int i = 0; i < arrayOfArrays.size(); i++)
  {
    if (arrayOfArrays[i].size() != (i + arrayOfArrays[0].size()))
    {
      return (i + arrayOfArrays[0].size());
    }
  }
  return 0;
}
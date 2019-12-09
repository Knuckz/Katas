class Same {
    public :static bool comp(std::vector<int>, std::vector<int>);
};

bool Same::comp(std::vector<int> a, std::vector<int> b)
{
  bool isEqual;
    
  if (a.size() == 0 && b.size() == 0)
  {
    return true;
  }
  if ((a.size() != b.size()) || (a.empty() || b.empty()))
  {
    return false;
  }
  
  for (int i = 0; i < a.size(); i++)
  {
    isEqual = false;
    for (int j = 0; j < b.size(); j++)
    {
      if (a[i]*a[i] == b[j])
      {
        isEqual = true;
        b[j] = -1;
        break;
      }
    }
    if (!isEqual)
    {
      return false;
    }
  }
  return true;
}
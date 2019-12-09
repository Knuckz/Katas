class Tortoise
{
public:
    static std::vector<int> race(int v1, int v2, int g);
};

std::vector<int> Tortoise::race(int v1, int v2 , int g)
{
  std::vector<int> result;
  
  if (v1 >= v2)
  {
    return {-1, -1, -1};
  }
  
  //Hours
  result.push_back(g/ (v2-v1));
  //minutes
  result.push_back(g % (v2-v1) * 60/ (v2-v1));
  //seconds
  result.push_back((((g % (v2-v1)) * 60) % (v2-v1)) * 60 / (v2-v1));
  
 return result;
}
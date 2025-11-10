#include <iostream>
using namespace std;

string convert(int num)
{
  string units[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};
  string tens[] = { "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" };string hunds[] = { "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};string thous[] = { "", "M", "MM", "MMM"};

  if(num >= 1 && num < 4000){
    return thous[num / 1000] + hunds[(num/100) % 10] + tens[(num/10) % 10] + units[num % 10];
  }
  else{
    string errorMsg = "Number entered is not within range";
    return errorMsg;
  }
}

int main()
{
  cout << convert(112) << endl;
  return 0;
}
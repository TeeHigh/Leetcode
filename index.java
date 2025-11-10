public class index {
  
  public static void main(String[] args){
    System.out.println(converter(112));
  }
  
  public static String converter(int num){
    String units[] = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"}; 
    String tens[] = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"}; 
    String hunds[] = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"}; 
    String thous[] = {"", "M", "MM", "MMM"};
    
    if(num >= 1 && num < 4000){
      return thous[num / 1000] + hunds[(num/100) % 10] + tens[(num/10) % 10] + units[num % 10];
    }
    else{
      return "Value entered is not within";
    }
  }
}

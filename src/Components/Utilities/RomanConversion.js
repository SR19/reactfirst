export default function RomanConversion(num) { 
  if(num < 1){ return "";}
  if(num >= 40){ return "XL" + RomanConversion(num - 40);}
  if(num >= 10){ return "X" + RomanConversion(num - 10);}
  if(num >= 9){ return "IX" + RomanConversion(num - 9);}
  if(num >= 5){ return "V" + RomanConversion(num - 5);}
  if(num >= 4){ return "IV" + RomanConversion(num - 4);}
  if(num >= 1){ return "I" + RomanConversion(num - 1);}  
}
var farenheitConvert=function(farenheit){
  var result=(farenheit-32)*5/9;
  return farenheit+" degrees Fahrenheit is " +result+" degrees Celsius";
}

console.log(farenheitConvert(70));

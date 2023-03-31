
function celToOther(){
  var num=document.getElementById("temp").value;
  var cel=parseFloat(num);
  var fr=parseFloat(num)+(9*(parseFloat (num)))/5 + 32;
  var kel=parseFloat(num)+273;
  document.getElementById("celcius").value=(cel.toFixed(2));
  document.getElementById("farenheit").value=(fr.toFixed(2));
  document.getElementById("kelvin").value=(kel.toFixed(2));
}
function frToOther(){
var num1=document.getElementById("temp").value;
var cel1=(5* (parseFloat(num1) - 32))/9;
var fr1=parseFloat(num1);
var kel1=(5* (parseFloat(num1) - 32))/9+273;
document.getElementById("celcius").value=(cel1.toFixed(2));
document.getElementById("farenheit").value=(fr1.toFixed(2));
document.getElementById("kelvin").value=(kel1.toFixed(2));
}
function kelToOther(){
var num2=document.getElementById("temp").value;
var cel2=parseFloat(num2)-273;
var fr2=parseFloat(num2)+(9*(parseFloat (num2)-273))/5 + 32;
var kel2=parseFloat(num2);
document.getElementById("celcius").value=(cel2.toFixed(2));
document.getElementById("farenheit").value=(fr2.toFixed(2));
document.getElementById("kelvin").value=(kel2.toFixed(2));
}
/*° F = 9/5 ( ° C) + 32
Kelvin to Fahrenheit	° F = 9/5 (K - 273) + 32
Fahrenheit to Celsius	° C = 5/9 (° F - 32)
Celsius to Kelvin	K = ° C + 273
Kelvin to Celsius	° C = K - 273
Fahrenheit to Kelvin	K = 5/9 (° F - 32) + 273
</div>*/

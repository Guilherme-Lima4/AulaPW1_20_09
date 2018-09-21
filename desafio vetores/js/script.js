var v=[10];

v[0]= prompt("Digite um numero");	
v[1]= prompt("Digite um numero");
v[2]= prompt("Digite um numero");
v[3]= prompt("Digite um numero");
v[4]= prompt("Digite um numero");
v[5]= prompt("Digite um numero");
v[6]= prompt("Digite um numero");
v[7]= prompt("Digite um numero");
v[8]= prompt("Digite um numero");
v[9]= prompt("Digite um numero");

var MaiorNum = Math.max(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9]);
var MenorNum = Math.min(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9]);
document.write("<b>O maior número é:</b>" + MaiorNum);
document.write("<br>");
document.write("<b>O menor número é:</b>" + MenorNum);
document.write("<br>");

var affichage = document.getElementById('message');

var a="1";
var b="2";
var c=a+b;
affichage.innerText="le type de a est " +typeof(a) + ", le type de b est  "+typeof(b)+ " , le type de c est  "+typeof(c);

a =parseInt(a);
affichage.innerText="le nvtype de a est " +typeof(a);

b =parseInt(b);
affichage.innerText="le nv type de b est " +typeof(b);
c=a+b;
affichage.innerText=c;


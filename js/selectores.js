/*Selectores y n child */
console.log("ss");

var header=document.querySelector("#main-header");
header.style.borderBottom ="solid 4px #ccc";

//var item=document.querySelector('input');
var itemA=document.querySelectorAll('input');

//[] permite acceder a las propiedades de cada etiqueta
var inputEnviar=document.querySelector('input[type="submit"]');
inputEnviar.value="Enviar ahora";

//var inputSubmit=document.querySelector('input[min="1"]');

/*nth-child() odd:inpar even:par*/

var valoresImpar=document.querySelectorAll('li:nth-child(odd)');
var valorespar=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<valoresImpar.length;i++){
    valoresImpar[i].style.backgroundColor="Tan";
    valorespar[i].style.backgroundColor="LimeGreen";

}
var itemLista=document.querySelector("#items");

/*Nodo Padre*/

var padreMain=itemLista.parentElement;
//var padreMain=itemLista.parentNode;
var padreContainer=padreMain.parentNode;

/*Nodo Hijo*/

//var hijosLista=itemLista.childNodes; Incluye los saltos
var hijosLista=itemLista.children;

var primerHijo=itemLista.firstElementChild;
var ultimoHijo=itemLista.lastElementChild;


/*Nodo Hermano*/
var anteriorHermano=itemLista.previousElementSibling;
var siguienteHermano=itemLista.nextElementSibling;
//Crear un elemento: createElement
    var nuevoDiv=document.createElement("div");
    console.log("creado");
    nuevoDiv.className="nuevo";
    nuevoDiv.id="nuevoDiv"
//Crear un nuevo atributo
    nuevoDiv.setAttribute('title',':)');

//Crear un nuevo nodo de texto: createTextNode

/*
    1. Crear un h2
    2. Añade el texto al h2
    3. Añade eñ h2 al div creado
*/
var h2=document.createElement("h2");

var crearNuevoTextNode=document.createTextNode('Hola Mundo :)');
h2.appendChild(crearNuevoTextNode)
nuevoDiv.appendChild(h2);

//Insertar en una posición de la página
var contain=document.querySelector(".container");
var h1=document.querySelector('h1');

contain.insertBefore(nuevoDiv,h1);
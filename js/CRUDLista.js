//Trabajará en el formulario y la lista desordenada
var formulario=document.getElementById('formAgregar');
var lista=document.getElementById('items');

formulario.addEventListener('submit',crearNuevoElemento);

/* Pasos para añadir
1. Obtener lo que se escribe en la caja de agregar
2. Crear el elemento agregar
3. Añadir como nuevo hijo un texto

4. crear un elemento boton
5. Añadir la X al boton como texto


5. Añadir el elemento a agregar a la lista desordenada
*/

/*
    Añadir:
        ( li => texto y (boton => texto))
*/
function crearNuevoElemento(evento){
    evento.preventDefault();

    var buscar=document.getElementById('item').value;
    console.log(buscar);

    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(buscar));
    console.log(li);

    var btn=document.createElement('button');
    btn.className="btn btn-danger btn-sm float-right eliminar";
    btn.appendChild(document.createTextNode('X'));

    li.appendChild(btn);

    console.log(li);

    lista.appendChild(li);

    //lista.appendChild();

}

/*Pasos para eliminar
1. Añade un escuchador para el evento click de la lista desordenada
2. Se usa la lista de clases para identificar aquel que posee a "eliminar"
3. Se captura al padre del hijo anterior
4. Se elmina de la Lista

Opcional
2.1 Configurar una pantalla modal para eliminar o cancelar la eliminacion

*/
lista.addEventListener('click',eliminarElemento);

function eliminarElemento(e){
    //Devuelve el objeto donde se hace click
        // console.log(e.target);

    //console.log(e.target.classList.contains("eliminar"));
    if(e.target.classList.contains("eliminar")){
        if(confirm('¿Esta seguro de esta decisión?')){
            //Obtiene al padre del button
            var li=e.target.parentElement;
            //console.log(li);
            lista.removeChild(li);
        }
        
    }

}

/* Filtar elementos
1. Añadir un evento de escuchar al soltar una tecla para el filtro
2. Almacenar el valor-texto de la caja en una variable
3. Seguir un patron de comparar el MINISCULAS
4. Obtener todos los elementos a comparar 
5. Convertir a un array ya que se recibe una colección
6. Recorrer cada elemento 
7. Usar la clase indexOf de String para verificar la primero ocurrencia
*/

var filtro=document.getElementById('filtro');
filtro.addEventListener('keyup',filtrarElementos);

function filtrarElementos(e){
    var filtroValor=filtro.value.toLowerCase();
    var elementos=document.querySelectorAll('li');
    Array.from(elementos).forEach(function(elemento){
        var filtroV=elemento.firstChild.textContent;

        //console.log(elemento.firstChild.textContent);
        //console.log(elemento.lastElementChild.textContent);
        if(filtroV.toLowerCase().indexOf(filtroValor)!=-1){
            elemento.style.display="block";
        }else{
            elemento.style.display="none";
        }
    })
    //console.log(elementos)
    //console.log(filtroValor);

}


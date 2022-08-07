



document.getElementById('formulario').addEventListener('submit',(e)=>{
    e.preventDefault();

    //Obtener los valores del formulario
    const autor=document.getElementById('autor').value;
    const titulo=document.getElementById('titulo').value;
    const isbn=document.getElementById('isbn').value;
  
    if(autor === '' || titulo ==='' || isbn===''){
      
        UI.mostrarMensaje("Por favor verifica los datos",'danger');
    }else{
        const libro=new Libro(autor,titulo,isbn);
        Datos.agregarLibro(libro);
        UI.agregarLibroLista(libro);
        UI.mostrarMensaje("Nuevo libro agregado",'sucess');

        UI.limpiarCampos();
    }
});


class Libro{
    constructor(autor,titulo,isbn){
       
            this.autor=autor;
            this.titulo=titulo;
            this.isbn=isbn;
    }
}

class Datos{

    static agregarLibro(libro){
        const libros=this.obtenerListaLibros();
        libros.push(libro);

        localStorage.setItem('libros',JSON.stringify(libros));
        
       
    }
    
    static eliminarLibro(isnb){
        const listaLibros=this.obtenerListaLibros();

        listaLibros.forEach((libro,index)=>{

            if(libro.isbn===isnb){
                listaLibros.splice(index,1);    
            }
        }


        );

        localStorage.setItem('libros',JSON.stringify(listaLibros));
    }

    static obtenerListaLibros(){
        let lista;
        if(localStorage.getItem('libros')===null){
            lista=[];
        }else{
            lista=JSON.parse(
            localStorage.getItem('libros'));
        }
        return lista;
    }
}

class UI{
    static eliminarLibro(libro){
        const isnb=libro.parentElement.previousElementSibling.textContent;
    
       const s=libro.parentElement.parentElement.remove(); 

       Datos.eliminarLibro(isnb);
      
    }

    static mostrarLibros(){
        const listaRecibida=Datos.obtenerListaLibros();
        listaRecibida.forEach(libro => this.agregarLibroLista(libro));
    }

    static agregarLibroLista(libro){
        const cuerpoTabla=document.getElementById('cuerpoTabla');
        const filaLibro=document.createElement('tr');

            filaLibro.innerHTML=`
            <td>${libro.autor}</td>
            <td>${libro.titulo}</td>
            <td>${libro.isbn}</td>

            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
            `;

            cuerpoTabla.appendChild(filaLibro);
    }

    static mostrarMensaje(mensaje,nombreClase){
        const ndiv=document.createElement('div');
        ndiv.className=`alert alert-${nombreClase}`;
        ndiv.appendChild(document.createTextNode("Hola"));
      

        const contendor=document.getElementById('container');
        const formulario=document.getElementById('formulario');
        contendor.insertBefore(ndiv,formulario);

        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }

    static limpiarCampos(){
        document.getElementById('autor').value='';
        document.getElementById('titulo').value='';
       document.getElementById('isbn').value='';
    }
}
document.addEventListener('DOMContentLoaded',UI.mostrarLibros());
document.getElementById('cuerpoTabla').addEventListener(
    'click', verificar);

function verificar(e){

   
        if(e.target.classList.contains("delete")){
   
            UI.eliminarLibro(e.target);
            
        }

        

        
}
let nombre="Erlin";
let apellido="Sangay";
let direccion="Avenida"

console.log(nombre.repeat(5))
console.log(nombre.includes("lin"));
console.log(apellido.startsWith('San'));
console.log(direccion.endsWith('eda'));


let anios=[2001,2002,2003,2004];

let edad=anios.map(
    (let) => (new Date().getFullYear())-let
);
console.log(edad);
console.log(edad[2]);

let edad2=anios.map(
    (let, i) =>{
        let fecha=new Date().getFullYear();
        let edad=fecha-let;
        return `${i+1} : ${edad}`;
    }
);

console.log(edad2);
console.log(edad2[1]);


/*Prueba*/
const cuadrado=(num)=>num*2;
console.log(cuadrado(22));

const Persona=[
    {
        Nombre:"Erlin",
        Edad:12
    },
    {
        Nombre:"Sara",
        Edad:47
    
    },

]

const menor30=Persona.filter(
    p =>p.Edad<30
);

console.log(menor30);


/*Destruturing */
const persona={
    ApellidoM:"ferrea",
    ApellidoP:"Luios"
}

let {ApellidoM:m,ApellidoP:p}=persona;
console.log(m);
console.log(p)

/*Ejemplo
var [edadE,adulto]=[13,false]*/

const verificarEdad= (year) => {
    const edadE=new Date().getFullYear()- year;
    const mayor= edadE>=18 ?true:false;
    return [edadE,mayor];
}

const [e1989,m1989]=verificarEdad(1989)
console.log([e1989]);
console.log([m1989]);



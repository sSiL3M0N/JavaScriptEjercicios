let persona={
    Nombre:"Erlin",
    Apellido:"Sangay",
    Edad:21,
    cambiarEdad:function(edad){
        this.Edad=edad;
    }
}

//persona.Edad=23

//console.log(`${persona.Nombre} - ${persona.Apellido} ${persona.Edad}`)

let otraP=persona;


console.log(otraP.Edad);

otraP.cambiarEdad(12);

console.log(persona.Edad);

let getResumen=(person) => {
    return {
        datos:`${person.Nombre} ${person.Edad}`,
        informacion:`${person.Edad} ${persona.Apellido}`
    }
};
let {datos:d,informacion:i} =getResumen(persona)
console.log(`${d} - ${i}`);

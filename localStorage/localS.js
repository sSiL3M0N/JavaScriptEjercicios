const empleado={
    Nombre:"erlin",
    Edad:12
}

const objetoJSON=JSON.stringify(empleado);
localStorage.setItem('persona',objetoJSON);

console.log(localStorage.getItem('persona'));
const JSONString=JSON.parse(localStorage.getItem('persona'));
console.log(JSONString);

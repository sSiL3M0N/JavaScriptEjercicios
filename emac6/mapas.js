const mapas=new Map();
mapas.set(1,"Nombre");
mapas.set(2,"Apellido");
mapas.set(3,"Direccion");
mapas.set(4,"Numero");

mapas.forEach((valor,clave)=>
{
    console.log(`${valor} : ${clave}`);
}
)

console.log(mapas.get(2))
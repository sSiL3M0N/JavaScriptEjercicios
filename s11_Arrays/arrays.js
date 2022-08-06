const ing=['doce','lechuga','pescado'];

ing.push('choclo');

console.log(ing);

ing.pop();
console.log(ing);

ing.shift();
console.log(ing);
ing.unshift('merluza');
console.log(ing);

const platos=[
    {
        Nombre:'C',
        Precio:45
    },
    {
        Nombre:'D',
        Precio:43
    },
    {
        Nombre:'A',
        Precio:2
    }
];

const index=platos.findIndex((plato)=>{
    //console.log(`${index} : ${plato.Nombre} S/${plato.Precio}`);
    return plato.Nombre==='Papa a la Huancain';
});

let valor=(listaPlatos,texto)=>{
    const index=listaPlatos.findIndex((plato)=>{
       return plato.Nombre===texto;
    });

    return [index,listaPlatos[index]];
}

const [pos,val]=valor(platos,"Papa");

console.log(pos);
console.log(val);


let filtrar=(listaPlatos,filtro)=>{

    const fil=listaPlatos.filter(
        (plato)=>
        {
            return plato.Nombre.includes(filtro);
        }
        
    );  
    
    return [fil,fil.length];
};

const [lista,tamanio]=filtrar(platos,"a")

console.log("Holaa")
console.log(lista);
console.log(tamanio);

/*Ordenar

¿Qué quieres? No entiendo ¿No se sobreentiende que no me interesa comunicarme contigo? 
Sigue soñando que voy a sobajarme a conversando contigo en persona
*/

const ordenado=platos.sort((platoa,platob)=>{
    //return platoa.Precio - platob.Precio
    return platoa.Nombre.localeCompare(platob.Nombre);
});


console.log("_")

console.log(ordenado)




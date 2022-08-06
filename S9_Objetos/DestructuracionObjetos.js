
let rpta=[
    {
        codigo:200,
        data:{
            persona:{
                nombre:"Erlin",
                apellido:"Sangay",
                direccion:{
                    ciudad:"Lima",
                    pais:"Peru"
                }
            }          
        }
    },
    {
        codigo:201,
        data:{
            persona:{
                nombre:"Jesús",
                apellido:"Torres",
                direccion:{
                    ciudad:"Cajamarca",
                    pais:"Chile"
                }
            }          
        }      
    }
];

let {codigo,data:{persona:{direccion:{ciudad:c}}}}=rpta[0]


console.log(codigo)
console.log(c)


for (const {codigo:c,data:{persona:{direccion:{pais}}},data:{persona:{nombre}}} of rpta){
    console.log(`${c} ${nombre} ${pais}`)
}

const promesa1=new Promise((resolve,reject)=>{
    setTimeout(()=> resolve([100,101,102,103,104]),1500);
   
})

const promesa2=(id)=>{
    return new Promise((resolve,rej)=>{
        const Persona={
            Id:id,
            Nombre:'Erlin',
            Apellido:'Shangi'
        }

        setTimeout((id)=>{
            resolve(`${id} ${Persona.Nombre}`)
        },1500,id);
    });
}

const promesa3=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((id)=>{
            const permisos=['admin','user','csio','new','old'];
            resolve(`${id} ${permisos}`);
        },1500,id);
    });
}

/**
promesa1.then((resolve)=>{
    console.log(resolve);
    return promesa2(resolve[2]);
}
).then((resol)=>{
    console.log(resol);
    return promesa3(resol);
}).
then((resolve)=>console.log(resolve))
.catch(console.log("Error")) */

async function verificarPromesas(){
    const ids=await promesa1;
    console.log(ids);
    const usuario=await promesa2(ids[2]);
    console.log(usuario);
    const permisos=await promesa3(usuario.Id);
    console.log(permisos);
}
verificarPromesas();
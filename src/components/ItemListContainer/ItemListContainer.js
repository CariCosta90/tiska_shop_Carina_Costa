import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Skeleton from '@mui/material/Skeleton';

//mock data temporal
const frutas = [
    {nombre:"manzana", id:0, categoria:"fruta", stock:10, precio: 150},
    {nombre:"banana", id:1, categoria:"fruta", stock:10, precio: 150},
    {nombre:"limon", id:2, categoria:"fruta", stock:10, precio: 150},
    {nombre:"zanahoria", id:3, categoria:"verdura", stock:10, precio: 150},

];

const promesa = new Promise ((resolve, reject)=>{
    // para generar una demora ficticia se usa setTimeout
    setTimeout(() => {
        resolve(frutas);
        reject("hubo un error");
    }, 2000);    
})

const ItemListContainer = (mensaje) =>{

/*     const onAdd = (numero)=>{
        console.log(numero);
    } */

    const [productos, setProductos] = useState([]);

    const [loading, setLoading] = useState(true);

 /*    para crear un loader tenemos que usar la misma logica que usamos en el show mostrado en clase
    use state con el loader (ver como se puede hacer) seteado a true en mismo el useState
    luego en el finally lo seteamos a false
    al pasarlo en el return lo hacemos con un ternario si loading ? loeader : <ItemList productos={productos}/>} */

    useEffect(()=>{
        promesa
        .then((data)=>{
            setProductos(data);
            setLoading(false);
            console.log(data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);

    return(
        <div>
            <h2>{mensaje.greeting}</h2>
            {/* <ItemCount stock={10} onAdd={onAdd} inicial={1}/> */}
            {loading ? <Skeleton variant="circular" width={40} height={40} />: <ItemList productos={productos}/> } 
            {/* <ItemList productos={productos}/>  */}
        </div>
    );
}

export default ItemListContainer;

import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Spinner from 'react-bootstrap/Spinner';

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

    useEffect(()=>{
        promesa
        .then((data)=>{
            setProductos(data);
            console.log(data)
        })
        .catch((error)=>{ 
            console.log(error);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    return(
        <div>
            <h2>{mensaje.greeting}</h2>
            {/* <ItemCount stock={10} onAdd={onAdd} inicial={1}/> */}
            {loading ? 
                <Spinner animation="grow" />
            : <ItemList productos={productos}/> } 
        </div>
    );
}

export default ItemListContainer;

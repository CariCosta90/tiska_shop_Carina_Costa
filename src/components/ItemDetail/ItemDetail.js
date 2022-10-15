import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({productos}) => {
    const onAdd = (numero)=>{
        console.log(numero);
    }
    return (
        <>
        <div>ItemDetail</div>
        <h1>{productos.title}</h1>
        <img src={productos.image} alt={productos.title} />
        <p>{productos.description}</p>
        <p>{productos.price}</p>
        <ItemCount stock={10} onAdd={onAdd} inicial={1}/>
        </>
    )
}

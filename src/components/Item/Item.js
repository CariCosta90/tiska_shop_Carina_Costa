import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const Item = ({productos}) => {
    const onAdd = (numero)=>{
        console.log(numero);
    }
    return (
        <>
        <h2>{productos.nombre}</h2>
        <p>Categoria: {productos.categoria}</p>
        <ItemCount stock={10} onAdd={onAdd} inicial={1}/>
        </>
    )
}

export default Item;



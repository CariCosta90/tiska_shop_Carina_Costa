import React from 'react'
/* import ItemCount from '../ItemCount/ItemCount'; */

const Item = ({productos}) => {
/*     const onAdd = (numero)=>{
        console.log(numero);
    } */
    return (
        <>
        <p>{productos.title}</p>
        <img src={productos.image} alt={productos.title} />
        <p>{productos.price}</p> 
        <button>Ver detalle</button>
        {/* <ItemCount stock={10} onAdd={onAdd} inicial={1}/> */}
        </>
    )
}

export default Item;

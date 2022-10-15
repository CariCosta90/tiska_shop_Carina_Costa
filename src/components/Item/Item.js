import React from 'react'
import './Item.css'

const Item = ({productos}) => {
/*     const onAdd = (numero)=>{
        console.log(numero);
    } */
    return (
        <>
        <div className='producto'>
            <p className='tituloProducto'> {productos.title}</p>
            <img className='fotoProducto' src={productos.image} alt={productos.title} />            
            <div className='precio'>
                <p>{productos.price}</p>
                <div></div>
            </div> 
            <a class="fancy" href="#">
                <span class="top-key"></span>
                <span class="text">Ver detalle</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
            </a>

        </div>
        </>
    )
}

export default Item;


import React from 'react'
import './Item.css'
import {Link} from "react-router-dom";

const Item = ({productos}) => {
    console.log(productos);
    const URL = `/producto/${productos.id}`
    return (
        <>
        <div className='producto'>
            <p className='tituloProducto'> {productos.title}</p>
            <img className='fotoProducto' src={productos.image} alt={productos.title} />            
            <div className='precio'>
                <p>{productos.price}</p>
                <div></div>
            </div> 
            <Link to={URL}>
                <button className="fancy">
                    <span className="top-key"></span>
                    <span className="text">Ver detalle</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </Link>

        </div>
        </>
    )
}

export default Item;


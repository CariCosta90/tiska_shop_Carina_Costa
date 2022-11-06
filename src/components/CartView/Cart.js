import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';

export const Cart = () => {
  const {cart, qty, total, deleteItem, clear} = useContext(CartContext);

  return (
    <>
    {
      cart.length === 0 ? 
      (
        <h1>No agregaste productos aun, puedes ir a verlos  <Link to="/">AQUI</Link></h1>
      ):(
        <>
        {cart.map((prod)=>(
          <div className='elementoDelCarrito'>
          <p key={prod.id}>{prod.title}</p>
          {/* <img src={prod.image} alt={prod.title} className='imagen'/> */}
          <p>{prod.cantidad}</p>
          <p>$ {prod.price}</p>
          <p>$ {prod.price * prod.cantidad}</p>
          <button onClick={()=>deleteItem(prod.id)}>Borrar</button>
          </div>
        ))}
          <div className='totalDelCarrito'>
            <p>Productos: {qty}</p>
            <p>Total del carrito: $ {total}</p>
            <button onClick={clear}>Limpiar Carrito</button>
          </div>
        </>
      )
    }

    </>
  );

}


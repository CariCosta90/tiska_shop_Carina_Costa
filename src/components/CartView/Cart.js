import React, {useContext, useState} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import swal from 'sweetalert';
import "./Cart.css"
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
  const {cart, qty, total, deleteItem, clear} = useContext(CartContext);
  const [user, setUser] = useState({});

  const updateUser = (event) => {
    setUser( user => ({...user, [event.target.name]: event.target.value }))
}

  const updateStock = ()=>{
    cart.forEach(element => {
      const updateStock = doc(db, "productos", element.id)
      updateDoc(updateStock, {Stock: element.Stock - qty})
    });
    finalizarCompra();  
  }

  const finalizarCompra = ()=>{
    const ventaCollection = collection(db, "ventas");
    addDoc(ventaCollection, {
      comprador: user,
      items: cart, 
      total,
      date: serverTimestamp(),
    })
    .then(result =>{
      swal("Tu compra fue completada con exito!", "Codigo de la compra: " + result.id, "success");
      })
    .catch(e=>{
      console.log(e);
    })
    clear();    
  }

  return (
    <>
    {
      cart.length === 0 ? 
      (
        <h2>No agregaste productos aun, puedes ir a verlos  <Link to="/">AQUI</Link></h2>
      ):(
    <>

<div className='detalleCarrito'>
      <div className='titulosCarrito'>
        <p className='pCarrito'>Foto</p>
        <p className='pCarrito'>Producto</p>
        <p className='pCarrito'>Unidades</p>
        <p className='pCarrito'>Precio Unitario</p>
        <p className='pCarrito'>SubTotal</p>
        <p className='pCarrito'>Borrar</p>
      </div>          
      {cart.map((prod)=>(
        <div key={prod.id} className='elementoDelCarrito'>
            <img src={prod.image} alt={prod.title} className='imgCarrito'/> 
            <p className='pCarrito'>{prod.title}</p>
            <p className='pCarrito'>{prod.cantidad}</p>
            <p className='pCarrito'>$ {prod.price}</p>
            <p className='pCarrito'>$ {prod.price * prod.cantidad}</p>
            <div className='btnBorrar'>
              <button className='btnIcono' onClick={()=>deleteItem(prod.id)}><DeleteIcon /></button>
            </div>
        </div>
      ))}
</div>

        <div className='carritoFooter'>
            <div className='totalDelCarrito'>
              <p>Productos: {qty}</p>
              <p>Total del carrito: $ {total}</p>            
            </div>
            <div>
              <form action="" className='form' onSubmit={updateStock}>
                <input onChange={updateUser} placeholder="Nombre" name='name' type='text' />
                <input onChange={updateUser} placeholder="Apellido" name='surname' type='text' />
                <input onChange={updateUser} placeholder="Email" name='email' type='email' />
                <button className='btnFinalizar' type="submit">Finalizar Compra</button>
                <button className='btnFinalizar' onClick={clear}>Limpiar Carrito</button>
              </form>
            </div>       
        </div>   
        </>
      )
    }

    </>
  );

}


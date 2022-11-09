import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import swal from 'sweetalert';

export const Cart = () => {
  const {cart, qty, total, deleteItem, clear} = useContext(CartContext);

/*   const comprador = {
    nombre: 'Un usuario', 
    apellido: 'Apellido',
    email: 'mail@mail.com',    
  } */

  const obtenerDatos = ()=>{
    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lName').value;
    const email = document.getElementById('mail').value;

    finalizarCompra(nombre, apellido, email);
  }

  const finalizarCompra = (nombre, apellido, email)=>{
    const ventaCollection = collection(db, "ventas");
    addDoc(ventaCollection, {
      comprador: {
        nombre: nombre,
        apellido: apellido,
        email: email,
      },
      /* modificar items para que no contenga la descripcion ni la imagen. nos podemos quedar con producto, cantidad, precio, total */
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



  const actualizarStock =()=>{

    cart.forEach(element => {
      console.log(element.id);
      console.log(element.Stock);
      const updateStock = doc(db, "productos", element.id)
      updateDoc(updateStock, {Stock: element.Stock - qty})
    });
    obtenerDatos();
  }

  return (
    <>
    {
      cart.length === 0 ? 
      (
        <h1>No agregaste productos aun, puedes ir a verlos  <Link to="/">AQUI</Link></h1>
      ):(
        <>
        {cart.map((prod)=>(
          <div key={prod.id} className='elementoDelCarrito'>
          <p>{prod.title}</p>
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
          </div>
          <div>
            <form action="">
              <label> Nombre: <input id='name' type="text" /></label>
              <label> Apellido: <input id='lName' type="text" /></label>
              <label> Email: <input id='mail' type="email" /></label>
              <input type="button" value="Finalizar Compra" onClick={actualizarStock}/>
              <button onClick={clear}>Limpiar Carrito</button>
            </form>
          </div>          
        </>
      )
    }

    </>
  );

}


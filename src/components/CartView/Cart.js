import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import swal from 'sweetalert';
import "./Cart.css"
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
  const {cart, qty, total, deleteItem, clear} = useContext(CartContext);

  let nombre="";
  let apellido="";
  let email="";

  const valEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  const valTexto = /[A-Za-z]/;
  
  const obtenerDatos = ()=>{
    nombre = document.getElementById('name').value;
    apellido = document.getElementById('lName').value;
    email = document.getElementById('mail').value;

    if(nombre ===valTexto && apellido===valTexto && email === valEmail){
      actualizarStock()
    }else{
      swal("Falta algo!", "Debes completar el formulario para poder avanzar con la compra", "warning");
    }
  }

  const finalizarCompra = (nombre, apellido, email)=>{
    const ventaCollection = collection(db, "ventas");
    addDoc(ventaCollection, {
      comprador: {
        nombre: nombre,
        apellido: apellido,
        email: email,
      },
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
      const updateStock = doc(db, "productos", element.id)
      updateDoc(updateStock, {Stock: element.Stock - qty})
    });
    finalizarCompra(nombre, apellido, email);
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
              <form action="" className='form'>
                <label>Nombre: <input required minlength="3" id='name' type="text"/></label>
                <label>Apellido: <input required minlength="3" id='lName' type="text"/></label>
                <label>Email: <input required id='mail' type="email"/></label>
                <input className='btnFinalizar' type="submit" value="Finalizar Compra" onClick={obtenerDatos}/>
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


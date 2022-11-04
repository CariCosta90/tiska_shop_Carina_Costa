import React from "react";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/CartView/Cart";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

const App = () =>{

  const mensaje = "Bienvenidos al sitio de Tiska!";


  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/categoria/:id" element={<ItemListContainer greeting={mensaje}/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </CartProvider>
    </BrowserRouter>      
    </>
  );
}

export default App;
import React from "react";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () =>{
  const mensaje = "Bienvenidos al sitio de Tiska!";


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje}/>
      <ItemDetailContainer/>

      
    </>
  );
}

export default App;
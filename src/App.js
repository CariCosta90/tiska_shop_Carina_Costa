import React from "react";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

const App = () =>{
  const mensaje = "Bienvenidos al sitio de Tiska!";


  return (
    <>
      <NavBar />
      <ItemListContainer greeting={mensaje}/>
      
      
    </>
  );
}

export default App;
// Importer les outils React
import React from "react"
import ReactDOM from "react-dom/client"
//Importer notre premier composant : App
import App from './App';
import ProfileCard from "./ProfileCard";
//Cibler la div dont l'id est root
const rootDiv = document.getElementById("root")
//Créer un noeud racine React a partir de la div root
const reactRoot = ReactDOM.createRoot(rootDiv)
//Injecter notre premier composant dans le nœud racine
reactRoot.render(
  
   <App />
 
);
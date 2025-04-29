import React from "react"
import ProductCard from "./ProductCard"
export default function App(){
    return (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px',
              backgroundColor: '#f0f2f5'
            }}>
             <ProductCard 
        name="Parfum" 
        price="200 DH" 
        description="Un parfum élégant aux notes florales." 
        im="/th.jpeg" />
      <ProductCard 
        name="Montre Homme" 
        price="450 DH" 
        description="Montre en acier inoxydable avec bracelet en cuir." 
        im="/watch.jpeg"/>
      <ProductCard 
        name="Casque Bluetooth" 
        price="320 DH" 
        description="Casque sans fil avec réduction de bruit active." 
        im="/headphones.jpeg"
      />
      </div>
    )
}
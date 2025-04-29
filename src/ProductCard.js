import React from 'react';
import './ProfileCard.css'; 
export default function ProductCard(props){
    return (
        <div className="profile-card">
            {props.im && <img src={props.im} alt={props.name} className="product-img" />}

      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <p>{props.description}</p>
      
    </div>
    )
}
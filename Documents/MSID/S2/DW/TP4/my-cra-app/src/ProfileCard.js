import React from 'react';
import './ProfileCard.css'; 
export default function ProfileCard(props){
    return (
        <div className="profile-card">
      <h2>{props.name}</h2>
      <h4>{props.speciality}</h4>
      <p>{props.description}</p>
    </div>
    )
}
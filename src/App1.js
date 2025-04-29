import React from "react"
import ProfileCard from "./ProfileCard"
export default function App(){
    return (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '20px',
              backgroundColor: '#f0f2f5'
            }}>
              <ProfileCard 
                name="Hanae Baraka" 
                speciality="Data Engineer" 
                description="Passionnée par le big data et les systèmes d'information."  />
              <ProfileCard 
                name="Youssef Bennani" 
                speciality="Front-End Developer" 
                description="Spécialiste React et créateur d’interfaces modernes." />
              <ProfileCard 
                name="Sarah El Amrani" 
                speciality="UX Designer" 
                description="Crée des expériences utilisateur simples et efficaces." />
            </div>
    )
}
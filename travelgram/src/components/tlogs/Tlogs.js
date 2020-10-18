import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import HeroSection from '../HeroSection'
import TlogCard from './TlogCard';
import './Tlogs.css'

export default function Tlogs() {
  return (
      <>
       {/* hero container for background hero image */}
      <div className='hero-container'>
        <h1>Travelogues</h1>
      </div>
     <div className="container">
       <div class="card-group">
          <TlogCard/>
          <TlogCard/> 
    </div>
     </div>
    
      </>
    
  
  )
}

import React from 'react';
import './css/main.css';
import CardItem from './CardItem';
import {useState,useEffect} from 'react'
import Axios from 'axios';
function Cards() {
  
  const [state, setstate] = useState("")
useEffect(() => {
  
  Axios.get("https://jsonplaceholder.typicode.com/photos")
  .then(res=>{
    const data = res.data[0].url;
    setstate(data)
  })
  .catch(err=>{console.log(err)})
 
  
}, [])

  return (
    <div className='cards'>
      <h1>Travelogues</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/tlogpost'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/tlogpost'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/tlogpost'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/tlogpost'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/tlogpost'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/tlogpost'
            />
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Cards;

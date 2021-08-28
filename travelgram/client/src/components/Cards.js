import React from 'react';
import './css/main.css';
import CardItem from './CardItem';


function Cards() {
  

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
              path='/tlogpost/1'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/tlogpost/2'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/tlogpost/3'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/tlogpost/4'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/tlogpost/5'
            />
            <CardItem
              src='images/img-7.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/tlogpost/6'
            />
          </ul>


        </div>
      </div>
    </div>
  );
}

export default Cards;

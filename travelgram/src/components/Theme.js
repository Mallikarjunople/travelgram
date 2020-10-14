import React from 'react'
import '../components/Theme.css'
import ThemeItem from './ThemeItem'


function Theme() {
    return (
        <>
        <div className="section-theme">
        <p className='section-heading'>Travel themes</p>
        <div className="theme-list">
  
            <ThemeItem
                  src="../images/img-8.jpg"
                  label="Mumbai"
            /> 
            <ThemeItem
                  src="../images/img-7.jpg"
                  label="Delhi"
            /> 
            <ThemeItem
                  src="../images/img-9.jpg"
              label="Pune"
            />
              <ThemeItem
                  src="../images/img-home.jpg"
                  label="Banglore"
            />  
        </div>

        </div>
        
        </>
    )
}

export default Theme

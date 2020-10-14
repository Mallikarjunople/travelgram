import React from 'react'

function ThemeItem(props) {
    return (
        <>
             <div className="theme 1">
            <div className="theme_image">
                <img src={props.src} alt="theme-image"/>
            </div>
            <div className="theme_title title-white">
                <p >{props.label}</p>
            </div>
        </div> 
        </>
    )
}

export default ThemeItem

import React from 'react'
import './Tool.css'

const Tool = ({image, title, usecase, color}) => {
  return (
    <div className='tool'>
        <div className='tool-image-container' style={{backgroundColor: color}}>
            <img className='tool-image' src={image} alt={title}></img>
        </div>
        <div className='tool-text-content'>
            <span className='tool-title'>{title}</span>
            <span className='tool-usecase'>{usecase}</span>
        </div>
    </div>
  )
}

export default Tool
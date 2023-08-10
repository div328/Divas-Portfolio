import React from 'react'
import '../styles/card.css'

function Card(props) {
  return (
    <> 
    <div className='skillCardBox'>
      <img className='skillCardImg' src={props.src} />
      <p className='exp'>{props.statement}</p>
    </div>
    </>
  )
}

export default Card
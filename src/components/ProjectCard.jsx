import React from 'react'
import '../styles/card2.css'

function Card(props) {
  return (
    <> 
    <div className='skillCardBox1'>
      <img className='skillCardImg1' src={props.src} />
      <p className='exp1'>{props.statement}</p>
      { props.url && <a className='a3' href={props.url}> github link</a>}
    </div>
    </>
  )
}

export default Card
import React from 'react'
import '../styles/skills.css'
import obj from './imgCardArray'
import Card from './Card'

function Skills() {
  return (
    <>
      
      <div className='skillCont'>
      <h3>Skills</h3>
      <div className='mainSect'>
        {
          obj.skills.map((i)=><Card id={i.id} src={i.imgSrc} statement={i.statement}/>)
        }
      </div>
      </div>
    </>
  )
}

export default Skills
import React from 'react'
import '../styles/skills.css'
import skills from './skillsArray'
import Card from './Card'

function Skills() {
  return (
    <>
      <div className='skillCont'>
        {
          skills.map((i)=><Card id={i.id} src={i.imgSrc} statement={i.statement}/>)
        }
      </div>
    </>
  )
}

export default Skills
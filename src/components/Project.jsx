import React from 'react'
import '../styles/project.css'
import ProjectCard from "./ProjectCard"
import obj from "./imgCardArray"

function Project() {
  return (
    <>
      <div className='projectCont'>
      <h3>Project</h3>
      <div className='mainSect'>
        {
          obj.projects.map((i) => <ProjectCard src={i.imgSrc} statement={i.statement} url={(i.url!==''?i.url:undefined)}/>)
        }
      </div>
      </div>
    </>
  )
}

export default Project
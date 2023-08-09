import React from 'react'
import '../styles/about.css'
import imgSrc from '../img/about.jpg'

function About() {
  return (
    <>

      <div className='aboutCont'>
        <div className='aboutMySelf bt'>
             <img className='aboutImg' src={imgSrc} alt=''/>
             <div className='hold1'>
               <h3>A LITTLE ABOUT ME</h3>
                <p className='aboutPara'>
                  Hello , i am Divas and i am a pursuing <st>Btech (IT) </st>  from Kanpur University .
                  I have a learning attitude i.e i find it very exciting when i get to learn new things and experiences , and
                  i also like playing Computer Games.
                </p>
               <div className='social'>
               <a href='https://www.linkedin.com/in/divas-singh-6063ba1b9/' className='a2'><i class="fa-brands fa-linkedin sc"></i></a>
               <a href='https://www.instagram.com/singhd91/' className='a2'><i class="fa-brands fa-instagram sc"></i></a>
               <a href='https://www.facebook.com/divas.singh.777/' className='a2'><i class="fa-brands fa-facebook sc"></i></a>
               </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default About
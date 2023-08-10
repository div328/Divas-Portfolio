import React ,{useEffect,useRef} from 'react'
import '../styles/home.css'
import Typed from "typed.js";

function Home() {
  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Programer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 95,
      backSpeed: 95,
      backDelay: 95,
      smartBackspace: true,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  function resume() {
    window.open("https://drive.google.com/file/d/1Lf71Vq9efHYOHO3jmYGCI-0QH2vQbvSr/view?usp=sharing",'_blank');  
  }

  function mail(){
    window.location = "mailto:divassingh213@gmail.com";
  }

  return (
   <>
    <div className='homeCont'>
      <div className='homeLeft'>
      <div className='intro'>Hi , My name is <p className='namePara'> Divas Singh </p> and i am a <span className='typedText' ref={el}> </span></div>
      <div className='buttons'>
        <button className='buttonDes hi' onClick = {mail}>Connect</button>
        <button className='buttonDes re' onClick={resume}>Resume</button>
      </div>
      </div>
      <div className='homeRight'><img className='divasImg' src='/img/divas.jpg' alt='img'/>
      <img className='mobileImg' src="https://www.seekpng.com/png/detail/111-1112824_picture-my-portfolio-logo-png.png" alt="Picture - My Portfolio Logo Png@seekpng.com"/>
      </div>
      
    </div>
   </>
  )
}

export default Home
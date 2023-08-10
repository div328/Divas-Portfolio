import React ,{useEffect,useRef} from 'react';
import '../styles/about.css';
import Typed from "typed.js";


function About() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["A LITTLE ABOUT ME"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 95,
      backSpeed: 95,
      backDelay: 95,
      smartBackspace: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  

  return (
    <>

      <div className='aboutCont'>
        <div className='aboutMySelf bt'>
             <img className='aboutImg' src='/img/about.jpg' alt=''/>
             <div className='hold1'>
               <h3><span ref={el}> </span></h3>
                <p className='aboutPara'>
                  Hello , i am Divas and i am a pursuing <st>Btech (IT) </st>  from Kanpur University .
                  I have a learning attitude i.e i find it very exciting when i get to learn new things and experiences , and
                  i also like playing Computer Games.
                </p>
               <div className='social'>
               <a href='https://www.linkedin.com/in/divas-singh-6063ba1b9/' className='a2'><i class="fa-brands fa-linkedin sc"></i></a>
               <a href='https://www.instagram.com/singhd91/' className='a2'><i class="fa-brands fa-instagram sc"></i></a>
               <a href='https://github.com/div328' className='a2'><i class="fa-brands fa-github sc"></i></a>
               </div>
             </div>
         </div>
      </div>
    </>
  )
}

export default About
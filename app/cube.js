'use client';

import { useEffect } from 'react';

export default function Cube() {

  
  useEffect(() => {
  const innerVh = window.innerHeight;


    const handleMouseMove = (event) => {
      const cube = document.querySelector('.cube');
      const x = event.clientX / window.innerWidth * 2 - 1;
      const y = event.clientY / window.innerHeight * 2 - 1;
      const rotateX = y * 180;
      const rotateY = x * 180;
      cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const mouseCursor = (e) => {

      const circle = document.querySelector('.circle')
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      circle.style.left = mouseX + 'px';
      circle.style.top = mouseY + 'px';

      if (innerVh < mouseY) {
        circle.style.display = "none"
      }

    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', mouseCursor);

    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', mouseCursor);

    };


  }, 
  []);



  return (
    <>

      <div className="wrapper">
      <div className="circle">
        MOVE MOUSE ! 
      </div>
        <div className="cube">
          <div className="one">
            <img src='/white-wall-textures.jpg'></img>
            <p className='text'>write</p>
          </div>
          <div className="two">
          <img src='/white-wall-textures.jpg'></img>
            <p className='text'>article</p>
          </div>
          <div className="three">
          <img src='/white-wall-textures.jpg'></img>
            <p className='text'>next-js</p>
          </div>
          <div className="four">
          <img src='/white-wall-textures.jpg'></img>
            <p className='text'>server-component</p>
          </div>
          <div className="five">
          <img src='/white-wall-textures.jpg'></img>
            <p className='text'>client-component</p>
          </div>
          <div className="six">          
            <img src='/white-wall-textures.jpg'></img>
            <p className='text'>react</p></div>
        </div>
      </div>
    </>
  );
}
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const windowResize = () =>{
    setSize(window.innerWidth)
  }

useEffect(()=>{
  window.addEventListener('resize', windowResize);
  return ()=>{
    console.log('cleanup');
    window.removeEventListener('resize', windowResize)
  }
},[])



  return <>
  <h2>window size</h2>
  <h4>{size} px</h4>
  </>
};

export default UseEffectCleanup;

import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return <>
    <button className='btn' onClick={() => setShow(!show)}> show/hide</button>


    {show && <Item />}

  </>
};


const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const setWindowSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {


    window.addEventListener('resize', setWindowSize);


    return () => {
      window.removeEventListener('resize', setWindowSize)
    }

  }, [])



  return (
    <div>
      <h1>Window</h1>

      <h3 style={{marginTop:'2rem',color:'red'}}>width : {size} px</h3>




    </div>
  )
}


export default ShowHide;

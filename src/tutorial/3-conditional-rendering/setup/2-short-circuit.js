import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
<h1>{text || 'hello world'}</h1>

<button className='btn' onClick={()=>setIsError(!isError)}>show error</button>

<h1>{isError && 'Error Occurred..'}</h1>

{isError ? (<p>There is an Error..</p>) : (<div><h2>There is no Error..</h2></div>)}


    </>
  )
};

export default ShortCircuit;

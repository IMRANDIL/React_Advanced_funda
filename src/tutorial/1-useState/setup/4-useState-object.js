import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'adil',age:28,message:'random message'});

// multiple state..

const [name, setName] = useState('adil');
const [age, setAge] = useState(28);
const [message, setMessage] = useState('random message');





const changeMessage = ()=>{
  setMessage('hi adil')
}

  return (
    <>
<h3>{name}</h3>
<h3>{age}</h3>
<h3>{message}</h3>
<button className='btn' onClick={changeMessage}>change message</button>
    </>
  )
};

export default UseStateObject;

import React, { useState } from 'react';

const ErrorExample = () => {
  let title = 'random title';
 
  const handleclick = () => {
title = 'hello people'

  }

  return (
    <>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleclick}>change title</button>

    </>
  )
};

export default ErrorExample;

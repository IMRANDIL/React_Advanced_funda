import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeInd = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }

  return (
    <>
      {
        people.map((person) => {
          const { id, name } = person
          return (
            <div key={id} className='item'>
              <h4>{name}</h4>
              <button className='btn' onClick={() => removeInd(id)}>remove</button>
            </div>
          )
        })
      }
      <button type='button' className='btn' onClick={() => setPeople([])}>remove all</button>
    </>
  )
};

export default UseStateArray;

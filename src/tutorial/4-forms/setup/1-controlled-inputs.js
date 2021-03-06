import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setfirstName] = useState('');
  const [email, setEmail] = useState('');
  const [age,setAge] = useState('');
  const [people, setPeople] = useState([]);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email && age) {
      const person = { id: new Date().getTime().toString(), firstName, email, age }
      setPeople((people) => {
        return [...people, person];
      })
      setfirstName('');
      setEmail('');
      setAge('')
    }
    else {
      console.log('empty values');
    }

  }

  return <>


    <article>


      <form className='form' onSubmit={handleSubmit}>


        <div className="form-control">
          <label htmlFor="firstName">Name : </label>
          <input type="text"
            id='firstName'
            name='firstName'
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)} />
        </div>


        <div className="form-control">
          <label htmlFor="email">Email : </label>
          <input type="email"
            id='Email'
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>



        <div className="form-control">
          <label htmlFor="age">Age : </label>
          <input type="text"
            id='Age'
            name='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)} />
        </div>
        <button type='submit'>add person</button>
      </form>
    </article>

    {people.map((person) => {
      const { id, firstName, email, age } = person;
      return <div className='item' key={id}>
        <h4>{firstName}</h4>
        <p>{age}</p>
        <p>{email}</p>
      </div>
    })}

  </>
};

export default ControlledInputs;

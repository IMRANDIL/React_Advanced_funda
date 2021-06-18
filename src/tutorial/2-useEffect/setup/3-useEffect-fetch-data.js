import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
const [profile, setProfile] = useState([]);
const fetchData = async () =>{
  const response = await fetch(url);
  const data = await response.json();
  setProfile(data)
 
}
useEffect(()=>{
  fetchData()

},[])

  return <>
  <h2>Github users</h2>
  <ul className='users'>
{profile.map((person)=>{
  const {id,login,avatar_url,html_url} = person;
  return (
  <li key={id}>
    <img src={avatar_url} alt={login} />
    <div>
      <h4>{login}</h4>
      <a href={html_url}>User_profile</a>
    </div>
  </li>
  )
})}


  </ul>

  </>
};

export default UseEffectFetchData;

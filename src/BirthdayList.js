import React from 'react'
import './index.css'
import {data} from './data'
import Profile from './Profile';
import {useState} from 'react'
function BirthdayList() {
  const len = data.length;
  const [people,setPeople] = useState(data);
  return (
    <section className="main">
      <h1>{len} Birthdays Today</h1>    
        <Profile people={people}/>
      <button className='btn' onClick={()=>setPeople([])}>Clear All</button>
    </section>
  )
}

export default BirthdayList

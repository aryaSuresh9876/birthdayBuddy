import React from 'react'
import './index.css'
const Profile = ({people}) => {
    return (
    people.map((person)=>{
        const {id,img,name,age} = person;
        return (
        <article key={id} className='profile'>
            <img src={img} alt={name}/>
            <div className='profile-div'>
                <h3>{name}</h3>
                <p>{age}</p>
            </div>
        </article>
    )}));
}

export default Profile
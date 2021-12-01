import React from 'react';
import './Card.styles.css';

function Card(props) {
    return (
        <div className='card'>
            <img className='avatar' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="avatar" />
            <h2 className='name'>{props.monster.name}</h2>
            <p className='email'>{props.monster.email}</p>
        </div>
    )
}

export default Card;
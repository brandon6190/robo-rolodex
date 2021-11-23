import React from 'react';

function MonsterCard(props) {
    return (
        <div className='monster-card'>
            <img className='monster-avatar' src='#' alt="avatar" />
            <p className='monster-name' key={props.id}>{props.name}</p> 
            <p className='monster-email' key={props.id}>{props.email}</p>
        </div>
    )
}

export default MonsterCard;
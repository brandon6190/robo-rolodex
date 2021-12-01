import React from 'react';
import './List.styles.css';

import Card from './Card/Card.component';

function List({monsters}) {
    return (
        <div className="list">
            {monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    )
}

export default List;
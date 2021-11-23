import React from 'react';
import MonsterCard from './monsterCard.component';

function MonsterList(props) {
    return (
        <div className="monster-list">
            {props.monsters.map(monster => (
                <MonsterCard id={monster.id} name={monster.name} email={monster.email} />
            ))}
        </div>
    )
}

export default MonsterList;
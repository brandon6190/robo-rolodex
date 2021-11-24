import React from 'react';

function SearchField(props) {
    return (
        <input type="text" placeholder="Search for Monster" onChange={props.changeHanlder}/>
    )
}

export default SearchField;
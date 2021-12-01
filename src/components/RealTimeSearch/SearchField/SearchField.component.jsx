import React from 'react';

import './SearchField.styles.css';

function SearchField(props) {
    return (
        <input 
            className='search-field' 
            type="search" 
            placeholder="Search for Monster" 
            onChange={props.changeHanlder}
        />
    )
}

export default SearchField;
import React from 'react';

import './SearchField.styles.css';

function SearchField({changeHanlder}) {
    return (
        <input 
            className='search-field' 
            type="search" 
            placeholder="Search for Monster" 
            onChange={changeHanlder}
        />
    )
}

export default SearchField;
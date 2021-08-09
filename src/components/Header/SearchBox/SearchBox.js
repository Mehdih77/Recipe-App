import React from 'react';
import './SearchBox.css'

export default function SearchBox() {
    return (
        <div className='search-box'>
            <input type="text" placeholder='Search your recipe...' />
            <button>Search</button>
        </div>
    )
}

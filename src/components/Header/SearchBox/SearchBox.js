import React from 'react';
import './SearchBox.css'

export default function SearchBox() {
    return (
        <>
            <input className='search-box-input' type="text" placeholder='Search your recipe...' />
            <button className='search-box-btn'>Search</button>
        </>
    )
}

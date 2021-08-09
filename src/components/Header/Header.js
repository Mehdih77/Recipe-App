import React from 'react';
import './Header.css';
import SearchBox from './SearchBox/SearchBox'

export default function Header() {
    return (
        <header className='header'>
            <div className='header-title-logo'>
            <h2>Recipe App</h2>
            <img src="./images/food-icon.png" alt="food icon recipe green" />
            </div>
            <div className='search-box'>
                <SearchBox/>
            </div>
        </header>
    )
}

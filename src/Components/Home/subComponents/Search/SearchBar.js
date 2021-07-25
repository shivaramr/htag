import React from 'react'
import style from './search.module.css';

function SearchBar() {
    return (
        <div className={style.main}>
            Search New Talent <input className={style.input} />
        </div>
    )
}

export default SearchBar

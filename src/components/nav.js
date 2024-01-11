import React from 'react'
import { Link } from 'gatsby'
import { nav, navItem } from './nav.module.css'

const Nav = () => {
    const types = ['nature', 'plant']
    return (
        <ul className={nav}>
            {types.map((type) => (
                <li key={type} className={navItem}>
                    <Link to={`/gallery/${type}`}>{type}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav

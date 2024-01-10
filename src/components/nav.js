import React from 'react'
import { Link } from 'gatsby'
import { nav, navItem } from './nav.module.css'

const Nav = () => {
    const pages = ['nature', 'plants']
    return (
        <ul className={nav}>
            {pages.map((page) => (
                <li key={page} className={navItem}>
                    {/* fix nav after gallery dynamic pages are created */}
                    <Link to={'/'}>{page}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav

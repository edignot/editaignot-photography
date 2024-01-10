import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import { header, h1 } from './header.module.css'

const Header = ({ title }) => {
    return (
        <header className={header}>
            <Link to={'/'}>
                <h1 className={h1}>{title}</h1>
            </Link>
            <Nav />
        </header>
    )
}

export default Header

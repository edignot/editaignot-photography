import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
    const pages = ['nature', 'plants']
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            {pages.map((page) => (
                <li key={page}>
                    <Link to={`/gallery/${page}`}>{page}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav

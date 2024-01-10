import React from 'react'
import Header from './header'
import Footer from './footer'
import { layout } from './layout.module.css'

const Layout = ({ title, children }) => {
    return (
        <div className={layout}>
            <Header title={title} />
            <p>test</p>
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout

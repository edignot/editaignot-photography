import React from 'react'
import { footer, backButton } from './footer.module.css'

const Footer = () => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className={footer}>
            <button onClick={handleClick} className={backButton}>
                &#8593;
            </button>
            {/* <p>© 2024 Edita Ignot Photography</p> */}
        </footer>
    )
}

export default Footer

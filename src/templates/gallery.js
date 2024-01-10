import React from 'react'
import Layout from '../components/layout'

const Gallery = ({ pageContext }) => {
    const { type, images } = pageContext

    return (
        <body>
            <Layout title='Edita Ignot Photography'>{type}</Layout>
        </body>
    )
}

export default Gallery

export const Head = () => (
    <>
        <title>Edita Ignot Photography</title>
        <meta name='description' content='Edita Ignot Photography Website' />
    </>
)

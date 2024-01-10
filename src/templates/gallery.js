import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const Gallery = ({ pageContext }) => {
    const { type, images } = pageContext

    return (
        <body>
            <Layout title='Edita Ignot Photography'>
                <>
                    {images
                        .sort((a, b) => Number(a.order) - Number(b.order))
                        .map((img) => (
                            <GatsbyImage
                                key={img.order}
                                image={getImage(img.image)}
                                alt={img.title}
                            />
                        ))}
                </>
            </Layout>
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

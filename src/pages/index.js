import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import '../index.css'

const IndexPage = () => {
    const { allContentfulImageEntry } = useStaticQuery(graphql`
        query {
            allContentfulImageEntry(filter: { type: { eq: "new" } }) {
                edges {
                    node {
                        order
                        type
                        image {
                            gatsbyImageData(
                                width: 3840
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    `)

    const allImages = allContentfulImageEntry.edges

    return (
        <body>
            <Layout title='Edita Ignot Photography'>
                <>
                    {allImages
                        .sort(
                            (a, b) =>
                                Number(a.node.order) - Number(b.node.order)
                        )
                        .map((edge) => (
                            <GatsbyImage
                                key={edge.node.order}
                                image={getImage(edge.node.image)}
                                alt={edge.node.title}
                            />
                        ))}
                </>
            </Layout>
        </body>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>Edita Ignot Photography</title>
        <meta name='description' content='Edita Ignot Photography Website' />
    </>
)

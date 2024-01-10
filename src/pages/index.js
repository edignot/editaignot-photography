import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    const { allContentfulImageEntry } = useStaticQuery(graphql`
        query {
            allContentfulImageEntry {
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
    console.log(allImages)

    return (
        <main>
            <h1
                style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 200,
                }}
            >
                Edita Ignot Photography
            </h1>
            {allImages
                .sort((a, b) => Number(a.node.order) - Number(b.node.order))
                .map((edge) => (
                    <GatsbyImage
                        key={edge.node.order}
                        image={getImage(edge.node.image)}
                        alt={edge.node.title}
                    />
                ))}
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

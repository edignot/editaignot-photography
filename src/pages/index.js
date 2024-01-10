import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    const { allContentfulImageEntry } = useStaticQuery(graphql`
        query {
            allContentfulImageEntry {
                edges {
                    node {
                        id
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
        <main>
            {allImages.map((edge) => (
                <GatsbyImage
                    key={edge.node.id}
                    image={getImage(edge.node.image)}
                    alt={edge.node.title}
                />
            ))}
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

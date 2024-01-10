import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

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
                                width: 1024
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
    `)

    const image = getImage(allContentfulImageEntry.edges[0].node.image)

    return (
        <main>
            <StaticImage
                src='../images/icon.png'
                alt='logo'
                width={50}
                height={50}
            />
            <GatsbyImage image={image} alt='test' />
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Query all images from Contentful
    const result = await graphql(`
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

    if (result.errors) {
        throw result.errors
    }

    // Group images by type
    const imagesByType = {}
    result.data.allContentfulImageEntry.edges.forEach(({ node }) => {
        const { type } = node
        if (!imagesByType[type]) {
            imagesByType[type] = []
        }
        imagesByType[type].push(node)
    })

    // Create gallery pages for each image type
    Object.entries(imagesByType).forEach(([type, images]) => {
        const galleryPath = `/gallery/${type.toLowerCase()}`

        createPage({
            path: galleryPath,
            component: path.resolve('./src/templates/gallery.js'),
            context: {
                type,
                images,
            },
        })
    })
}

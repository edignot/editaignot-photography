/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `gatsby-test-1`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `7l2w9wi3tbdy`,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
}

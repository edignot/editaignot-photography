import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => {
    return (
        <body>
            <Layout title='Edita Ignot Photography'>
                <Link to='/'>page is missing, return home &#x2192;</Link>
            </Layout>
        </body>
    )
}

export default NotFoundPage

export const Head = () => <title>Page Not Found</title>

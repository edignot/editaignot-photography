import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => {
    return (
        <body>
            <Layout title='Edita Ignot Photography'>
                <p>We're missing something.</p>
                <Link to='/'>Return home</Link>
            </Layout>
        </body>
    )
}

export default NotFoundPage

export const Head = () => <title>Page Not Found</title>

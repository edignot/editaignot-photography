import React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key='google-fonts'
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;600;700&display=swap'
        />,
    ])
}

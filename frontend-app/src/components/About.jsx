import React from 'react';
import withAuth from '../HOCAuth/AuthWrapper';

const About = () => {

    return (
        <>
            <h1>This is a about page</h1>
            <p>This is a About Page of our website.</p>
        </>
    )
}

export default withAuth(About)

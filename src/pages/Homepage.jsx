import React from 'react'
import { Helmet } from "react-helmet"
import { Section1 } from '../components/Homepage/Section1'

export const Homepage = () => {
    return (
        <div className='homepage-container'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>UnitresTech - Home </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <Section1 />
        </div>
    )
}

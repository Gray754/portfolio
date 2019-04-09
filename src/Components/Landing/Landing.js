import React from 'react'
import './Landing.scss'

export default function Landing(){
    return(
        <div className='landingContainer' id='home'>
            {/* <div className='divider'></div> */}
            <div className='landingContent'>
            <img src='https://lh3.googleusercontent.com/VIvJxvokwQtIEvMXBZUJdyqgVAMx1jACoDl10hh0sV1RcAWdxpvHFuacjbTIJc6Pw0pKaDDzJQ=w328-h324-no' alt='' width='150px'/>
                <h2>Hello, I'm Lee Collins</h2>
                <h3>Fullstack Web Developer with experience in React, Node.js, JavaScript, SQL, and more!</h3>
            </div>
        </div>
    )
}
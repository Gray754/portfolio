import React from 'react'
import Landing from '../Landing/Landing'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

import './Main.scss'

export default function Main(){
    return(
        <div>
            <Landing/>
            {/* <div className='divider'/> */}
            <About/>
            {/* <div className='divider2'/> */}
            <Projects/>
            {/* <div className='divider'/> */}
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    )
}
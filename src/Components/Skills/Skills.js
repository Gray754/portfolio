import React from 'react'
import ReactIcon from './Icons/ReactIcon'
import NodeIcon from './Icons/NodeIcon'
import HtmlIcon from './Icons/HtmlIcon'
import CssIcon from './Icons/CssIcon'
import JavascriptIcon from './Icons/JavascriptIcon'
import PostgresqlIcon from './Icons/PostgresqlIcon'
import SassIcon from './Icons/SassIcon'
import GithubIcon from './Icons/GithubIcon'

import './Skills.scss'

export default function Skills(){
    return(
        <div className='skillsContainer' id='skills'>
            <div className='skillsContent'>
                <h3>Skills</h3>
                <div className='icons'>
                    <div><ReactIcon/></div>
                    <div><NodeIcon/></div>
                    <div><JavascriptIcon/></div>
                    <div><HtmlIcon/></div>
                    <div><CssIcon/></div>
                    <div><SassIcon/></div>
                    <div><PostgresqlIcon/></div>
                    <div><GithubIcon/></div>
                </div>
            </div>
        </div>
    )
}
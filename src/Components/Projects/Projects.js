import React from 'react'
import './Projects.scss'
import WellTreadImg from './welltread.png'
import ServiceDashImg from './servicedash.png'

export default function Projects(){
    return(
        <div className='projectsContainer'>
            <div className='projectsContent' id='projects'>
                <h2>Projects</h2>
                <div className='project-one'>
                    <span  className='anchor'/>
                    <h3>Service Dash</h3>
                    <a href='http://www.service-dash.com/' target='_blank'><img src={ServiceDashImg} alt='ServiceDash Landing Page'/></a>
                    <div className='projectLinks'>
                        <div>
                            <a href='http://www.service-dash.com/' target='_blank'><p>Visit Website</p></a>
                        </div>
                        <div>
                            <a href='https://github.com/Gray754/personal_project' target='_blank'><p>View on Github</p></a>
                        </div>
                    </div>
                </div>
                <div className='project-two'>
                    <h3>Well Tread</h3>
                    <a href='https://www.welltread.co/' target='_blank'><img src={WellTreadImg} width='300px'/></a>
                    <div className='projectLinks'>
                        <div>
                            <a href='https://www.welltread.co/' target='_blank'><p>Visit Website</p></a>
                        </div>
                        <div>
                            <a href='https://github.com/well-tread/well-tread' target='_blank'><p>View on Github</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
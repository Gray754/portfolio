import React from 'react'
import './Projects.scss'

export default function Projects(){
    return(
        <div className='projectsContainer'>
            <div className='projectsContent' id='projects'>
                <h2>Projects</h2>
                <div className='project-one'>
                    <span  className='anchor'/>
                    <h3>Service Dash</h3>
                    <img src='https://github.com/Gray754/personal_project/raw/master/landing.png' alt='ServiceDash Landing Page'/>
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
                    <img src='https://lh3.googleusercontent.com/9xnTJMkbTJWhaY4d3dJSYw1b06sOwkIAxp3vvGGYgdNM4uh0S8_2kLgJnyh217VvA7SwX4kL4rG60una8fZGLolO7eE0-SJaP4ndMOvp1Q0biCNPb61oItDSuFY-jr9T6IFRbGHreSsj9Ae7E_-4EFTsmwX4ubPneO5g6iifQy5LSxp7P-3Eyfnbh5mFXrEOaEWjr3fWFIDkS9nHZByRv2hEu4WrcqlFwKu205IqbbP8Dgc52MDNOBy_mYs3Yjszj5xfJS5LQGH9y1o6NcPg-_QnfqEwbJQdNfO5vkdTWH9xSSoFJ45hp8bHblTirdn0mChkZAjyT1WNfaTGoJm2TAz2oPCr8MQsGttudwsk0vlMhNpB9nQxPJTBr-YJvWZG1gEKkGLt0ihBvxZ1dGQs5F2uySBv6HOrJ-TymtAzAmPh2W5qZeOShabHAwUWpsMdqFnKCqrYwOeNfFhAn_wIvCKg8r7BzOLKhySQxGsmNmdDJIQemZT4gIjroIukf5wJruTIX4MPBkq3PTIPu3z9W3H7t8trcN6qJo721Z9ouVimSOsZPaiAiuA03g4yqCVhekH9XZ98bZZQxCaKpRc-rMawu4rvVhcJbWUrK0xyJiILQ_UtbqRef2PuhW1Gi3vJhvnU4ZQ5uZscrn0qKUMWgd24ufeIdg4=w2460-h1400-no' width='300px'/>
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
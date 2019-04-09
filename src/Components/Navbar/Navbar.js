import React, {Component} from 'react'
import './Navbar.scss'

class Navbar extends Component{
    constructor(){
        super();
        this.state={
            isToggled: false,
            tabletClass: 'tablet-links animated slideInRight',
            mobileClass: 'mobile-links animated slideInDown'
        }
    }

    toggleNav=()=>{
        this.setState({isToggled:!this.state.isToggled})
    }

    render(){
        console.log(this.state.isToggled)
        return(
            <div className='navbarContainer'>
                <div className='navbarContent'>
                    <div className='title'>
                        <h1>leecollins.dev</h1>
                        <i class="fas fa-laptop-code"></i>
                    </div>
                    <div>
                        <ul className='desktopNav'>
                            <a href='#home'><li className='navbarLinks'>Home</li></a>
                            <a href='#about'><li className='navbarLinks'>About</li></a>
                            <a href='#projects'><li className='navbarLinks'>Projects</li></a>
                            <a href='#skills'><li className='navbarLinks'>Skills</li></a>
                            <a href='#contact'><li className='navbarLinks'>Contact</li></a>
                        </ul>
                    </div>
                    <div className='navMenu' onClick={()=>this.toggleNav()}><i class="fas fa-bars"></i></div>
                </div>
                {
                    this.state.isToggled ? 
                        <div className={this.state.tabletClass}>
                            <ul>
                                <a href='#home'><li className='navbarLinks'>Home</li></a>
                                <a href='#about'><li className='navbarLinks'>About</li></a>
                                <a href='#projects'><li className='navbarLinks'>Projects</li></a>
                                <a href='#skills'><li className='navbarLinks'>Skills</li></a>
                                <a href='#contact'><li className='navbarLinks'>Contact</li></a>
                            </ul>
                        </div> 
                        : 
                        null
                }
                {
                    this.state.isToggled ? 
                        <div className={this.state.mobileClass}>
                            <ul>
                                <a href='#home'><li className='navbarLinks'>Home</li></a>
                                <a href='#about'><li className='navbarLinks'>About</li></a>
                                <a href='#projects'><li className='navbarLinks'>Projects</li></a>
                                <a href='#skills'><li className='navbarLinks'>Skills</li></a>
                                <a href='#contact'><li className='navbarLinks'>Contact</li></a>
                            </ul>
                        </div> 
                        : 
                        null
                }
            </div>
        )
    }
}

export default Navbar
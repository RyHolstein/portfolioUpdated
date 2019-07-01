import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Navigation.scss';

class Navigation extends Component {

    goTo = (path) => {
        this.props.history.push(path)
    }
    render () {
        return (
            <nav className='navigation'>
                <p className='navigation__link underline--gradient' onClick={()=> this.goTo('/about')}>About Me</p>
                <p className='navigation__link underline--gradient' onClick={()=> this.goTo('/projects')} >Projects</p>
                <p className='navigation__link underline--gradient' onClick={()=> this.goTo('/contact')} >Contact</p>
            </nav>
        )
    }
}

export default withRouter(Navigation)
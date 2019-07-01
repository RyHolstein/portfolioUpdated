import React, { Component } from 'react'
import Header from '../Sides/Header/Header';
import Body from '../Sides/Body/Body';
import ProjectList from '../../Components/ProjectList/ProjectList';




class Projects extends Component {



    goTo = (path) => {
        this.props.history.push(path)
    }

    render () {


        return (
            <React.Fragment>
                <Header> 
                    <p className='header__title'>Projects</p>

                </Header>
                <Body>
                    <ProjectList goTo={this.goTo}/>


                </Body>


            </React.Fragment>
        )
    }
}

export default Projects;
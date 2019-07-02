import React, { Component } from 'react'
import Header from '../Sides/Header/Header';
import Body from '../Sides/Body/Body';
import ProjectList from '../../Components/ProjectList/ProjectList';
import './Projects.scss';


class Projects extends Component {



    goTo = (path) => {
        this.props.history.push(path)
    }

    render () {


        return (
            <React.Fragment>
                <Header> 
                    <div className='projects__header'>
                        
                        <div className='projects__title'>
                            <div className='bar'></div>
                            Projects
                            
                        </div>
                        {/* <div className='bar'></div> */}
                      
                    </div>

                </Header>
                <Body>
                    <ProjectList goTo={this.goTo}/>
                </Body>


            </React.Fragment>
        )
    }
}

export default Projects;
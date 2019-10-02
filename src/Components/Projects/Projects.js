import React, { Component } from 'react'


import ProjectList from './ProjectList/ProjectList';
import './Projects.scss';


class Projects extends Component {



    goTo = (path) => {
        this.props.history.push(path)
    }

    render () {


        return (
            <React.Fragment>
                
                    <div className='projects__header'>
                        
                        <div className='projects__title'>
                            <div className='bar'></div>
                            Projects
                            
                        </div>
                        {/* <div className='bar'></div> */}
                      
                    </div>
                    <div className='projects__list'>
                        <ProjectList goTo={this.goTo}/>
                    </div>
               
              


            </React.Fragment>
        )
    }
}

export default Projects;
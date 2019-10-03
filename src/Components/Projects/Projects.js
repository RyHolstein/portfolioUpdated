import React, { Component } from 'react'


import ProjectList from './ProjectList/ProjectList';
import './Projects.scss';


class Projects extends Component {

    state = {
        leaving: false
    }


    componentDidMount() {
        window.scrollTo(0, 0)
    }
    goTo = (path) => {


        this.setState({leaving: true})
        setTimeout(() => {
            this.props.history.push(path)
        }, 1000);

    }

    render () {


        return (
            <React.Fragment>
                
                    <div className='projects__header'>
                        
                        <div className='projects__title'>
                            <div className='bar'></div>
                            <p className={`title-text ${this.state.leaving ? 'away': ''}`}>Projects</p>
                        </div>
                        {/* <div className='bar'></div> */}
                      
                    </div>
                    <div className={`projects__list ${this.state.leaving ? 'away': ''}`}>
                        <ProjectList goTo={this.goTo}/>
                    </div>
               
              


            </React.Fragment>
        )
    }
}

export default Projects;
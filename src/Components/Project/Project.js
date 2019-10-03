import React, { Component } from 'react'


import projects from './ProjectInfo';
import './Project.scss';



class Project extends Component {


    state = {
        title: '',
        description: '',
        imgs: []
    }

    componentDidMount() {
        this.getProject();
    }


    getProject = () => {
       let projectId = this.props.match.params.id;
       let project = projects[projectId];
       this.mapProjectToState(project)
    }


    mapProjectToState = (project) => {
        this.setState({
            title: project.title,
            description: project.description,
            imgs: project.imgs
        })
    }


    render() {

        return (
            <div className='project'>

                <section className='project__header'>
                    <div className='grad-bar'></div>
                    <p className='header-title'>{this.state.title}</p>
                </section>

                <section className='project__info'>
                    <p>{this.state.description}</p>
                </section>


            </div>
        )
    }
}   

export default Project
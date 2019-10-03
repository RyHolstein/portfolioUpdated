import React, { Component } from 'react'


import projects from './ProjectInfo';
import './Project.scss';
import ProjectInfo from './ProjectInfo/ProjectInfo';
import ImageList from './ImageList/ImageList';



class Project extends Component {


    state = {
        title: '',
        description: '',
        imgs: [],
        role: '',
        site: null,
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
            imgs: project.imgs,
            role: project.role,
            site: project.site,
        })
    }


    goTo = path => this.props.history.push(path)

    render() {

        return (
            <div className='center-project'>

                <div className='project'>

                    <section className='project__header'>
                        <div className='grad-bar'></div>
                        <p className='header-title'>{this.state.title}</p>
                    </section>

                    <ProjectInfo
                    description={this.state.description}
                    role={this.state.role}
                    site={this.state.site} />

                    <ImageList images={this.state.imgs} />


                    <div className='project__footer' onClick={() => this.goTo('/projects')}>
                            <p className='button--underline '>Back to Projects</p>
                    </div>
                </div>
            </div>
        )
    }
}   

export default Project
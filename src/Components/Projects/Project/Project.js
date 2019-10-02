import React, { Component } from 'react'
import Header from '../../Sides/Header/Header';
import Body from '../../Sides/Body/Body';
import ImageList from '../../../Components/Project/ImageList/ImageList';
import * as projects from './ProjectInfo';
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
       let project = projects.info[projectId];
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
            <React.Fragment>
                <Header>
                    <div className='project__header'>
                        <p className='project__title'>{this.state.title}</p>
                        <div className='project bar'></div>
                        <div className='project__center'> 
                            <div className='project__role'>
                                <p className='role__title'>Role</p>
                                <p className='role'>Full Stack</p>
                            </div>
                            <p className='project__desc'>{this.state.description}</p>
                        </div>
                    </div>
                </Header>
                <Body>
                    <ImageList images={this.state.imgs} />
                    
                </Body>

            </React.Fragment>
        )
    }
}   

export default Project
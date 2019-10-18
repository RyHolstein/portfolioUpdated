import React, { Component } from 'react'

import Draggable from 'react-draggable'
import './ProjectStore.scss';
import ProjectSidebar from './Sidebar/ProjectStoreSidebar';


class ProjectStore extends Component {



    render() {


        return (
            <Draggable>

                <div className='project-store'>
                    <ProjectSidebar />
                    <div className='project-store__main'>
                        
                    </div>
                </div>

            </Draggable>
        )
    }



}

export default ProjectStore;
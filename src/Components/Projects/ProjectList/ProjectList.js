import React from 'react'

import './ProjectList.scss';


import Finder from '../../UI/Finder/Finder';
import ProjectIcon from './ProjectIcon/ProjectIcon';


import projects from '../../Project/ProjectInfo';

const ProjectList = props => {

    
    return (
        <div className='project-list'>
            <Finder title={'📂 Recent Projects'}>
                <div className='icon-list'>
                    {
                        Object.keys(projects).map((key, index) => {
                            return <ProjectIcon 
                            click={() => props.goTo(`/projects/${key}`)}
                            key={index} 
                            name={projects[key].folderInfo.name} 
                            icon={projects[key].folderInfo.icon}/>
                        })
                    }
                </div>
            </Finder>
        </div>
    )
}


export default ProjectList

  // <div className='project-list__project' onClick={() => props.goTo('/projects/kritiq')} >kritiq.com</div>
            // <div className='project-list__project' onClick={() => props.goTo('/projects/iris')} >iris-oc.com </div>
            // <div className='project-list__project' onClick={() => props.goTo('/projects/cian')} >cianmoore.com</div>
            // <div className='project-list__project' onClick={() => props.goTo('/projects/love')} >loveisabella.com</div>
            // <div className='project-list__project' onClick={() => props.goTo('/projects/riddle')} >riddlefamily.foundation</div>
            // <div className='project-list__project' onClick={() => props.goTo('/projects/createsafe')} >createsafe beta</div>
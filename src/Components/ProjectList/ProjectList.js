import React from 'react'

import './ProjectList.scss';


const ProjectList = props => {

    

    return (
        <div className='project-list'>
            <div className='project-list__project' onClick={() => props.goTo('/projects/kritiq')} >kritiq.com</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/iris')} >iris-oc.com </div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/cian')} >cianmoore.com</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/love')} >loveisabella.com</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/riddle')} >riddlefamily.foundation</div>
            <div className='project-list__project' onClick={() => props.goTo('/projects/createsafe')} >createsafe beta</div>
        </div>

    )
}


export default ProjectList
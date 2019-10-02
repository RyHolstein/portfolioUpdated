import React from 'react'

import './ProjectList.scss';
import Finder from '../../UI/Finder/Finder';


const ProjectList = props => {

    

    return (
        <div className='project-list'>
            <Finder title={'📂 Recent Projects'}>
                <div className='icon-list'>

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
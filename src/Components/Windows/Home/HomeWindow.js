import React from 'react'

import projectInfo from '../../../JS/Project_List_Info';


import './HomeWindow.scss';
import HomeTopbar from './Topbar/HomeTopbar';
import AppIcon from '../../UI/Icons/AppIcon/AppIcon';
const HomeWindow = (props) => {


    return (
        <div className='home'>
            <HomeTopbar />
            <div className='home__section home__section--me'>
                <AppIcon title={'about me'}/>
                <AppIcon title={'contact'}/>
                

            </div>
            <div className='home__section home__section--projects'>

                {
                    Object.keys(projectInfo).map((key, index) => {
                        return <AppIcon 
                        key={index} 
                        title={projectInfo[key].folderInfo.name}
                        icon={projectInfo[key].folderInfo.icon} />
                    })
                }
                
            </div>
        </div>  
    )
}

export default HomeWindow;
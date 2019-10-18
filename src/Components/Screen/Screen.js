import React, { Component } from 'react'




import './Screen.scss';
import Finder from '../UI/Finder/Finder';
import AppBar from '../AppBar/Appbar';
import ProjectStore from '../ProjectStore/ProjectStore';




class Screen extends Component {

    state = {
        openTabs : ['home'] 
    }

    openTab = (tabName) => {
        const updatedTabs = [...this.state.openTabs]
        updatedTabs.push(tabName)
        this.setState({openTabs: updatedTabs})
    }

    closeTab = (tabName) => {
        const tabs = [ ...this.state.openTabs ]
        const updatedTabs = tabs.filter( e => e !== tabName)
        this.setState({openTabs: updatedTabs})
    }

    
    closeWindowHandler = (window) => {


    }

    render () {

        return (
            <div className='screen-holder' >

               
                <Finder 
                tabs={this.state.openTabs} 
                closeTab={this.closeTab} 
                openTab={this.openTab}
                />

                
                <ProjectStore />


                <div className='app-bar__container'>
                    <AppBar openTab={this.openTab} />
                </div>
                
            </div>
        )
    }
}

export default Screen;
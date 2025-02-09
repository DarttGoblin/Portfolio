import React from 'react'
import './Project.css'

const Project = ({onClick, title, skill, date, description, tools, available}) => {
    return (
        <div onClick={onClick} className={available ? 'project-container' : 'project-container not-available'}>
            <div className='project-title-skill-date-container'>
                <div className='project-title-date-container'>
                    <span className='project-title'>{title}</span>
                    <span className='project-date'>{date}</span>
                </div>
                <span className='project-skill'>{skill}</span>
            </div>
            <span className='project-description'>{description}</span>
            <div className='tools-container'>
                {tools && tools.map((tool, index) => (
                    <div 
                        key={index} 
                        className='project-tool' 
                        style={{ backgroundColor: tool.backgroundColor }}
                    >
                        {tool.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project

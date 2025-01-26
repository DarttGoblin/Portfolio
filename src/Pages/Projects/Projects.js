import React from 'react'
import './Projects.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Project from '../../Components/Project/Project'

const Projects = () => {
    return (
        <>
            <Nav/>
            <section className='projects-section'>
                <span className='projects-title'>Projects</span>
                <span className='projects-description'>A list of some projects and side projects I worked on.</span>
                <div className='projects-container'>
                    <Project 
                        available
                        onClick={() => window.open('https://portfolio-git-main-yassinebazgourgmailcoms-projects.vercel.app/', '_blank')}
                        title='Portfolio 🚀'
                        date='2025' 
                        description='Personal Website showcasing skills and projects in web dev, ES, ML and robotics.'
                        tools={[
                            { name: 'React', backgroundColor: 'rgb(40, 80, 95)' },
                            { name: 'Node.js', backgroundColor: 'rgb(43, 90, 50)' },
                            { name: 'Express.js', backgroundColor: 'rgb(115, 115, 115)' }
                        ]}
                    />
                    <Project 
                        onClick={() => {alert('Project is done but not hosted yet, will be available soon!')}}
                        title='Cortext 🧠'
                        date='2025' 
                        description='Sentiment analysis interface combining text processing and neural network analysis.'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Javascript', backgroundColor: 'rgb(81, 75, 20)' },
                            { name: 'Python', backgroundColor: 'rgb(45, 70, 90)' }
                        ]}
                    />
                    <Project 
                        available
                        onClick={() => window.open('https://drive.google.com/file/d/1TsXVrZmQmEfpMF_mUPjdcb787d7KsVtP/view?usp=drive_link', '_blank')}
                        title='MoroccoInsights 🕌'
                        date='2025' 
                        description="Analysis based on data of Morocco: A BI approach for studying the population"
                        tools={[
                            { name: 'PDI', backgroundColor: 'rgb(120, 31, 31)' },
                            { name: 'Power BI', backgroundColor: 'rgb(90, 75, 30)' },
                            { name: 'SQL', backgroundColor: 'rgb(114, 150, 186)' }
                        ]}
                    />
                    <Project 
                        available
                        onClick={() => window.open('https://darttgoblin.github.io/NeuroLink/NeuroLink.Pages/Home/Home.html', '_blank')}
                        title='NeuroLink 🎮'
                        date='2025' 
                        description='NeuroDrive interface, user-friendly enabling secure, precise car control and automation'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Javascript', backgroundColor: 'rgb(81, 75, 20)' },
                            { name: 'Python', backgroundColor: 'rgb(45, 70, 90)' },
                        ]}
                    />
                    <Project 
                        available
                        onClick={() => window.open('https://darttgoblin.github.io/NeuroLink/NeuroLink.Pages/Home/Home.html', '_blank')}
                        title='NeuroDrive 🚗'
                        date='2025' 
                        description='Intelligent, automated vehicle control with advanced safety and seamless integration.'
                        tools={[
                            { name: 'Python', backgroundColor: 'rgb(45, 70, 90)' },
                            { name: 'Raspberry Pi', backgroundColor: 'rgb(95, 40, 55)' }
                        ]}
                    />
                    <Project 
                        onClick={() => {alert('Project is done but not hosted yet, will be available soon!')}}
                        title='Therabot 💊'
                        date='2025' 
                        description='Diagnostic chatbot for identifying and analyzing digestive system diseases.'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Javascript', backgroundColor: 'rgb(81, 75, 20)' },
                            { name: 'Node.js', backgroundColor: 'rgb(43, 90, 50)' },
                            { name: 'Express.js', backgroundColor: 'rgb(115, 115, 115)' },
                            { name: 'Prolog', backgroundColor: 'rgb(135, 92, 31)' }
                        ]}
                    />
                    <Project 
                        available
                        onClick={() => window.open('https://heatz.ma/', '_blank')}
                        title='Heatz 🛒'
                        date='2024' 
                        description='E-commerce site offering tech products like headphones, cases, batteries.'
                        tools={[
                            { name: 'React', backgroundColor: 'rgb(40, 80, 95)' },
                            { name: 'Node.js', backgroundColor: 'rgb(43, 90, 50)' },
                            { name: 'Express.js', backgroundColor: 'rgb(115, 115, 115)' }                        
                        ]}
                    />
                    <Project 
                        onClick={() => {alert('Project is currently undergoing maintenance and will be available shortly!')}}
                        title='Medieval 🏰'
                        date='2024' 
                        description='Immerses users in the Middle Ages through paintings and classical music experiences.'
                        tools={[
                            { name: 'React', backgroundColor: 'rgb(40, 80, 95)' }
                        ]}
                    />
                    <Project 
                        available
                        onClick={() => window.open('https://darttgoblin.github.io/Whisper/Login.html', '_blank')}
                        title='Whisper 💬'
                        date='2024' 
                        description='A Real-time chat app ensuring seamless, prompt communication for users.'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Javascript', backgroundColor: 'rgb(81, 75, 20)' },
                            { name: 'Node.js', backgroundColor: 'rgb(43, 90, 50)' },
                            { name: 'Express.js', backgroundColor: 'rgb(115, 115, 115)' },
                            { name: 'SQL', backgroundColor: 'rgb(114, 150, 186)' }
                        ]}
                    />
                    <Project 
                        onClick={() => {alert('Project is currently undergoing maintenance and will be available shortly!')}}
                        title='Log Spectrum 📊'
                        date='2024' 
                        description='Analyzes and visualizes Snort logs for efficient intrusion detection monitoring.'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Javascript', backgroundColor: 'rgb(81, 75, 20)' },
                            { name: 'Node.js', backgroundColor: 'rgb(43, 90, 50)' },
                            { name: 'Express.js', backgroundColor: 'rgb(115, 115, 115)' },
                            { name: 'Snort', backgroundColor: 'rgb(69, 52, 52)' },
                            { name: 'SQL', backgroundColor: 'rgb(114, 150, 186)' }
                        ]}
                    />
                    <Project 
                        onClick={() => {alert('Project is currently undergoing maintenance and will be available shortly!')}}
                        title='Academic Nexus 🎓'
                        date='2023' 
                        description='Displays and simplifies student data management and grade tracking.'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Php', backgroundColor: 'rgb(75, 50, 95)' },
                            { name: 'SQL', backgroundColor: 'rgb(114, 150, 186)' }
                        ]}
                    />
                    <Project 
                        onClick={() => {alert('Project is currently undergoing maintenance and will be available shortly!')}}
                        title='iBulk 🏋️‍♂️'
                        date='2022' 
                        description='Fitness site with personalized plans, coaching, tools, and a store.'
                        tools={[
                            { name: 'Html', backgroundColor: 'rgb(134, 67, 67)' },
                            { name: 'Css', backgroundColor: 'rgb(32, 57, 101)' },
                            { name: 'Javascript', backgroundColor: 'rgb(81, 75, 20)' },
                            { name: 'Node.js', backgroundColor: 'rgb(43, 90, 50)' },
                            { name: 'Express.js', backgroundColor: 'rgb(115, 115, 115)' },
                            { name: 'SQL', backgroundColor: 'rgb(114, 150, 186)' }
                        ]}
                    />
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Projects

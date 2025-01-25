import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Tool from '../../Components/Tool/Tool'
import Separator from '../../Components/Separator/Separator'

import home_header_image from '../../Media/Home.Media/developer_activity.png'
import message from '../../Media/Home.Media/message.png'
import html from '../../Media/Home.Media/html-5.png'
import css from '../../Media/Home.Media/css-3.png'
import js from '../../Media/Home.Media/js.png'
import react from '../../Media/Home.Media/react.png'
import node from '../../Media/Home.Media/node-js.png'
import express from '../../Media/Home.Media/express.png'
import php from '../../Media/Home.Media/php.png'
import python from '../../Media/Home.Media/python.png'
import cpp from '../../Media/Home.Media/c++.png'
import java from '../../Media/Home.Media/java.png'
import raspberry from '../../Media/Home.Media/raspberry-pi.png'
import arduino from '../../Media/Home.Media/arduino.png'
import tinker from '../../Media/Home.Media/tinker-cad.png'
import prolog from '../../Media/Home.Media/prolog.png'
import sql from '../../Media/Home.Media/sql-5.png'
import powerbi from '../../Media/Home.Media/power-bi.png'
import pdi from '../../Media/Home.Media/pdi.png'
import r from '../../Media/Home.Media/r.png'
import snort from '../../Media/Home.Media/snort.png'
import git from '../../Media/Home.Media/git.png'
import nodered from '../../Media/Home.Media/node-red.png'
import web_dev from '../../Media/Home.Media/web_dev.png'
import robotics from '../../Media/Home.Media/robotics.png'
import machine_learning from '../../Media/Home.Media/machine_learning.png'

const testimonials_array = [
    // [
    //     'Mohammed Ameksa', 
    //     'https://www.linkedin.com/in/mohammed-ameksa/', 
    //     'Assistant Professor at the Faculty of Sciences Semlalia, Cadi Ayyad University', 
    //     ""
    // ],
    // [
    //     'Hasnae Elalaoui', 
    //     'https://www.linkedin.com/in/hasna-elalaoui-7a403942/', 
    //     'Assistant Professor at the Faculty of Sciences Semlalia, Cadi Ayyad University', 
    //     ""
    // ],
    [
        'Ali Aithoussa', 
        'https://www.linkedin.com/in/ali-h-448289116/', 
        'Data science master student at the faculty of science and technology', 
        "Hardest working fellas out there (especially if it matters to him). Best co worker \
        will recommand in every porject. May his spirit and drive live forevermore."
    ],
    [
        'Zahra Abouhane', 
        'https://www.linkedin.com/in/zahra-abouhane-27b8b218a/', 
        'Artifial intelligence master student at the faculty of science Semlalia', 
        "Yassine Bazgour Un très bon collaborateur de projets, travailleur, sérieux et rigoureux \
        au sens des tâches qui doivent etre réalisées en termes d'efficacité et de perfection, il \
        maitraise son travail et le fait jusqu'au bout de la bonne manière. Et quand on parle de la \
        créativité c'est une autre histoire pour un tel artiste comme lui ! Tout simplement c'est la \
        meilleure personne que quelqu'un peut choisir pour son projet !"
    ],
];

const Home = () => {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === 0 ? testimonials_array.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentTestimonialIndex((prevIndex) =>
            prevIndex === testimonials_array.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <Nav/>
            <div className='home-header'>
                <div className='home-header-text-content'>
                    <span className='home-header-welcome'>👋 Hi, Welcome Dear! I am Yassine Bazgour.</span>
                    <span className='home-header-into'>Web Alchemist and AI Sorcerer</span>
                    <span className='home-header-desciprion-part'>
                        Crafting interactive web applications that would be so intuitive, greeting you by name and inquiring 
                        into the well-being of your cat, while at the same time taking care of not having to hit that 
                        "Forgot Password" button again. And building machine learning models sharp enough not just to 
                        predict your next snack but recommend the perfect drink pairing and remind you to hit the gym afterward.
                    </span>
                    <span className='home-header-desciprion-part'>
                        Based in the vibrant streets of Marrakech, Morocco, equipped with a Bachelor in Mathematics and 
                        Computer Science, currently deeply indulged in Artificial Intelligence, and probably on too much coffee.
                    </span>
                    <div className='home-header-buttons-container'>
                        <Link to='/Contact'><button className='home-header-button get-in-touch'>GET IN TOUCH</button></Link>
                        <button onClick={() => {window.open('https://drive.google.com/file/d/1vNY6AJ-IxOrIOOSuSadUfWPwwJP51lgr/view?usp=drive_link', '_blank')}} className='home-header-button learn-more'>View My Resume</button>
                    </div>
                </div>
                <div className='home-header-image-container'>
                    <img className='home-header-image' src={home_header_image} alt='home-header-image'></img>
                </div>
            </div>
            <Separator/>
            <div className='tech-tools-container'>
                <span className='tech-tools-title'>Tech Stack</span>
                <span className='tech-tools-description'>A list of my favorite tools and technologies that I use on a regular basis.</span>
                <div className='tech-tools-rows-container'>
                    <Tool image={html} title='Html' usecase='Web Development' color="rgb(134, 67, 67)"/>
                    <Tool image={css} title='Css' usecase='Web Development' color="rgb(32, 57, 101)"/>
                    <Tool image={js} title='Javascript' usecase='Web Development' color="rgb(81, 75, 20)"/>
                    <Tool image={react} title='React' usecase='Web Development' color="rgb(40, 80, 95)"/>
                    <Tool image={node} title='Node.js' usecase='Web Development' color="rgb(43, 90, 50)"/>
                    <Tool image={express} title='Express.js' usecase='Web Development' color="rgb(115, 115, 115)"/>
                    <Tool image={php} title='Php' usecase='Web Development' color="rgb(75, 50, 95)"/>
                    <Tool image={python} title='Python' usecase='Machine Learning' color="rgb(45, 70, 90)"/>
                    <Tool image={java} title='Java' usecase='Desktop Application' color="rgb(90, 55, 35)"/>
                    <Tool image={cpp} title='C++' usecase='Embedded Systems' color="rgb(40, 65, 105)"/>
                    <Tool image={raspberry} title='Raspberry Pi' usecase='Embedded Systems' color="rgb(95, 40, 55)"/>
                    <Tool image={arduino} title='Arduino' usecase='Embedded Systems' color="rgb(45, 90, 90)"/>
                    <Tool image={tinker} title='Tinker Cad' usecase='Embedded Systems' color="rgb(255, 255, 255)"/>
                    <Tool image={nodered} title='Node Red' usecase='Embedded Systems' color="rgb(144, 0, 0)"/>
                    <Tool image={prolog} title='Prolog' usecase='Expert Systems' color="rgb(135, 92, 31)"/>
                    <Tool image={sql} title='SQL' usecase='Database' color="rgb(114, 150, 186)"/>
                    <Tool image={powerbi} title='Power BI' usecase='Business Intelligence' color="rgb(90, 75, 30)"/>
                    <Tool image={pdi} title='Pentaho Data Integration' usecase='Business Intelligence' color="rgb(95, 0, 0)"/>
                    <Tool image={r} title='R' usecase='Business Intelligence' color="rgb(15, 65, 17)"/>
                    <Tool image={snort} title='Snort' usecase='Cyber Security' color="rgb(69, 52, 52)"/>
                    <Tool image={git} title='Git' usecase='Code Management' color="rgb(0, 0, 0)"/>
                </div>
            </div>
            <Separator/>
            <div className='about-skills'>
                <span className='skills-title'>Skills</span>
                <span className='skills-description'>
                    These are the key skills I've developed through my experience in computer science and more.<br/>
                    They reflect my ability to solve complex problems and build creative solutions.
                </span>
                <div className='skills-container'>
                    <div className='skill-container'>
                        <img className='skill-image' src={web_dev} alt='Web Development'></img>
                        <span className='skill-title'>Web Development</span>
                        <span className='skill-description'>
                            I enjoy creating interactive and responsive web applications, 
                            focusing on intuitive user experiences and clean designs.
                        </span>
                    </div>
                    <div className='skill-container'>
                        <img className='skill-image' src={machine_learning} alt='Machine Learning'></img>
                        <span className='skill-title'>Machine Learning</span>
                        <span className='skill-description'>
                            Using data and algorithms, I develop predictive models that power 
                            decision-making and solve real-world problems.
                        </span>
                    </div>
                    <div className='skill-container'>
                        <img className='skill-image' src={robotics} alt='Robotics'></img>
                        <span className='skill-title'>Robotics</span>
                        <span className='skill-description'>
                            Exploring the fascinating world of robotics, I combine embedded 
                            systems and AI to build smart, automated systems.
                        </span>
                    </div>
                </div>
            </div>
            <Separator/>
            <div className="testimonials-container">
                <span className="testimonials-title">Testimonials</span>
                <div className="testimonials-sub-container">
                    <i className="arrow-icon fa fa-arrow-left" onClick={handlePrevious}></i>
                    <div className="testimonial">
                        <img className="quote-icon" src={message} alt="quote-icon"></img>
                        <span className="testimonial-content">{testimonials_array[currentTestimonialIndex][3]}</span>
                        <span onClick={() => { window.open(testimonials_array[currentTestimonialIndex][1], '_blank') }} className="testimonial-owner">{testimonials_array[currentTestimonialIndex][0]}</span>
                        <span className="testimonial-owner-identity">{testimonials_array[currentTestimonialIndex][2]}</span>
                        <div>
                            <i className="fa fa-dot"></i>
                        </div>
                    </div>
                    <i className="arrow-icon fa fa-arrow-right" onClick={handleNext}></i>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
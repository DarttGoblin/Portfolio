import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Separator from '../../Components/Separator/Separator'

import portrait from '../../Media/About.Media/yassine_bazgour.png'
import fitness from '../../Media/About.Media/fitness.png'
import guitar from '../../Media/About.Media/guitar.png'
import skate from '../../Media/About.Media/skate-board.png'


const About = () => {
	return (
		<>
			<Nav/>
			<section className='about-section'>
				<div className='about-header'>
					<div className='about-header-text-content'>
						<span className='about-header-title'>Innovative Mindset, Passion for Progress</span>
						<div className='about-header-descriptions-container'>
							<span className='about-header-description'>
								I'm Yassine Bazgour, a Full Stack Developer and AI and Robotics enthusiast. I 
								create interactive web applications with intuitive user experiences and develop 
								predictive models using machine learning.
							</span>
							<span className='about-header-description'>
								Based in Marrakesh, Morocco, I hold a Bachelor's in Mathematics and Computer 
								Science and am pursuing a Master's in Artificial Intelligence to stay at the 
								forefront of technology.
							</span>
							<span className='about-header-description'>
								With expertise in software development and a passion for AI, I aim to build 
								intelligent systems that solve complex problems and drive innovation.
							</span>
						</div>
						<div className='about-header-contacts-container'>
							<span className='about-header-contact'>Email: <span onClick={() => {CopyText('Email', 'yassine.bazgour@gmail.com')}} className='about-header-contact-info'>yassine.bazgour@gmail.com</span></span>
							<span className='about-header-contact'>Phone: <span onClick={() => {CopyText('Number phone', '+212 638659880')}} className='about-header-contact-info'>+212 638659880</span></span>
							<span className='about-header-contact'>GitHub: <span onClick={() => {window.open('https://github.com/DarttGoblin', '_blank')}} className='about-header-contact-info'>https://github.com/DarttGoblin</span></span>
							<span className='about-header-contact'>Linkedin: <span onClick={() => {window.open('https://www.linkedin.com/in/yassine-bazgour-178b73305', '_blank')}} className='about-header-contact-info'>https://www.linkedin.com/in/yassine-bazgour-178b73305</span></span>
							<span className='about-header-contact'>Resume: <span onClick={() => {window.open('https://drive.google.com/file/d/1WmhRaYhiUkkCMnBZOHYwRrqmTkekdynl/view?usp=drive_link', '_blank')}} className='about-header-contact-info'>https://drive.google.com/file/d/1vNY6AJ-IxOrIOOSuSadUfWPwwJP51lgr/view?usp=drive_link</span></span>
						</div>
						<Link 
							to='/Contact'
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						>
							<button className='hire-me'>HIRE ME</button>
						</Link>
					</div>
					<div className='about-header-image-container'>
						<img className='about-header-image' src={portrait}/>
					</div>
				</div>
				<Separator/>
				<div className='about-education'>
					<span className='about-education-title'>Education</span>
					<span className='about-education-description'>My education has taught me a lot, but I've learned even more beyond it.</span>
					<div className='about-education-year'>
						<div className='empty'></div>
						<div className='about-education-year-separator'>
							<span className='separator-year'><i class='fa fa-graduation-cap'></i></span>
							<div className='separator-vertical-line'></div>
						</div>
						<div className='about-education-achievement right'>
							<span className='achievement-year'>September 2025</span>
							<span className='achievement-title'>Master in Artificial Intelligence</span>
							<span className='achievement-place'>Faculty of Science Semlalia</span>
						</div>
					</div>
					<div className='about-education-year left-year'>
						<div className='about-education-achievement left'>
							<span className='achievement-year'>September 2024</span>
							<span className='achievement-title'>Bachelor's Degree in Fundamental Studies in Mathematics and Computer Science</span>
							<span className='achievement-place'>Faculty of Science Semlalia</span>
						</div>
						<div className='about-education-year-separator'>
							<span className='separator-year'><i class='fa fa-graduation-cap'></i></span>
							<div className='separator-vertical-line'></div>
						</div>
						<div className='empty'></div>
					</div>
					<div className='about-education-year'>
						<div className='empty'></div>
						<div className='about-education-year-separator'>
							<span className='separator-year'><i class='fa fa-graduation-cap'></i></span>
							<div className='separator-vertical-line'></div>
						</div>
						<div className='about-education-achievement right'>
							<span className='achievement-year'>September 2023</span>
							<span className='achievement-title'>DEUG in Mathematics and Computer Science</span>
							<span className='achievement-place'>Faculty of Science Semlalia</span>
						</div>
					</div>
					<div className='about-education-year'>
						<div className='empty'></div>
						<div className='about-education-year-separator'>
							<span className='separator-year empty-year'>2022</span>
							<div className='separator-vertical-line'></div>
						</div>
						<div className='empty-year-placeholder'></div>
					</div>
					<div className='about-education-year'>
						<div className='empty'></div>
						<div className='about-education-year-separator'>
							<span className='separator-year empty-year'>2021</span>
							<div className='separator-vertical-line'></div>
						</div>
						<div className='empty-year-placeholder'></div>
					</div>
					<div className='about-education-year left-year'>
						<div className='about-education-achievement left'>
							<span className='achievement-year'>September 2020</span>
							<span className='achievement-title'>Baccalaureate in Mathematics and Engineering Science</span>
							<span className='achievement-place'>High School Mohammed V</span>
						</div>
						<div className='about-education-year-separator'>
							<span className='separator-year'><i class='fa fa-graduation-cap'></i></span>
							<div className='separator-vertical-line'></div>
						</div>
						<div className='empty'></div>
					</div>
					<div className='about-education-year'>
						<div className='empty'></div>
						<div className='about-education-year-separator'>
							<span className='separator-year empty-year'>2019</span>
						</div>
						<div className='empty-year-placeholder'></div>
					</div>
				</div>
				<Separator/>
				<div className='about-work-flow-container'>
					<span className='about-work-flow-title'>Metrics Snapshot</span>
					<span className='about-work-flow-description'>It ain't much, but its honest work</span>
					<div className='about-work-flow'>
						<div className='work-flow-row'>
							<div className='work-flow'>
								<i className='fas fa-clock work-flow-icon'></i>
								<div className='work-flow-separator'></div>
								<div className='work-flow-text-content'>
									<span className='work-flow-title'>+300</span>
									<span className='work-flow-description'>Hours Worked</span>
								</div>
							</div>
							<div className='work-flow'>
								<i className='fas fa-layer-group work-flow-icon'></i>
								<div className='work-flow-separator'></div>
								<div className='work-flow-text-content'>
									<span className='work-flow-title'>10</span>
									<span className='work-flow-description'>Projects Finished</span>
								</div>
							</div>
						</div>
						<div className='work-flow-row'>
							<div className='work-flow'>
								<i className='fas fa-smile work-flow-icon'></i>
								<div className='work-flow-separator'></div>
								<div className='work-flow-text-content'>
									<span className='work-flow-title'>1</span>
									<span className='work-flow-description'>Happy Client</span>
								</div>
							</div>
							<div className='work-flow'>
								<i className='fas fa-coffee work-flow-icon coffe-icon'></i>
								<div className='work-flow-separator'></div>
								<div className='work-flow-text-content'>
									<span className='work-flow-title'>269</span>
									<span className='work-flow-description'>Coffee Drank</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Separator/>
				<div className='about-hobbies'>
					<span className='hobbies-title'>Hobbies</span>
					<span className='hobbies-description'>
						These are the activities that bring me joy and help me unwind, balancing<br/>
						my passion for technology with personal growth.
					</span>
					<div className='hobbies-container'>
						<div className='hobby-container'>
							<img className='hobby-image' src={guitar} alt='Guitar'></img>
							<span className='hobby-title'>Guitar</span>
							<span className='hobby-description'>
								Playing the guitar has been a passion of mine for over 2 years. It helps me relax and 
								express creativity through music.
							</span>
						</div>
						<div className='hobby-container'>
							<img className='hobby-image' src={fitness} alt='Fitness'></img>
							<span className='hobby-title'>Fitness</span>
							<span className='hobby-description'>
								As a bodybuilder for over 6 years, fitness has taught me discipline, focus, and 
								perseverance in both physical and mental challenges.
							</span>
						</div>
						<div className='hobby-container'>
							<img className='hobby-image' src={skate} alt='Skate'></img>
							<span className='hobby-title'>Skating</span>
							<span className='hobby-description'>
								Penny board skating for 6 years has been my way of staying active, mastering balance, 
								and occasionally pretending I'm cool while dodging curbs.
							</span>
						</div>
					</div>
				</div>

			</section>
			<Footer/>
		</>
	)
}

export default About

function CopyText(message, text) {
	navigator.clipboard.writeText(text)
		.then(() => {
			console.log('Text copied to clipboard:', text);
			alert(message + ' has been copied to your clipboard.')
		})
		.catch(err => {
		console.error('Failed to copy text:', err);
	});
}
  

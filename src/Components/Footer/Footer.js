import React from 'react'
import './Footer.css'

const Footer = () => {
	return (
		<footer>
			<span className='reserved'>© 2025 Bazgour Yassine, All rights reserved.</span>
			<div className='contact-icons'>
				<i onClick={() => {window.open('https://www.linkedin.com/in/yassine-bazgour-178b73305/', '_blank')}} className='contact-icon linkedin fab fa-linkedin'></i>
				<i onClick={() => {window.open('https://github.com/DarttGoblin', '_blank')}} className='contact-icon github fab fa-github'></i>
				<i onClick={() => {window.open('https://www.instagram.com/yassine_bazgour/', '_blank')}} className='contact-icon instagram fab fa-instagram'></i>
				<i onClick={() => {window.open('https://web.facebook.com/yassine.bazgour.5/', '_blank')}} className='contact-icon facebook fab fa-facebook'></i>
			</div>
		</footer>
	)
}

export default Footer
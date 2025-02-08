import React, { useState, useRef } from 'react'
import './Contact.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const HandleSend = async () => {
		if (!name || !email || !message) {
			alert('All fields are required!');
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch('https://portfolio-server-ebon-seven.vercel.app/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 
					name, 
					email, 
					message 
				}),
			});

			const data = await response.json();

			if (data.success) {
				alert('Message sent successfully!');
			} 
			else {
				alert('There was an error processing your message. Please try again.');
			}
		} 
		catch (error) {
			console.error('Error:', error);
			alert('There was a server error. Please try again.');
		} 
		finally {
			setIsSubmitting(false);
		}
  	};
  
	return (
		<>
			<Nav/>
			<section className='contact-setion'>
				<span className='contact-description'>
					Have a testimonial? Got a question? Need a collaborator for your next big idea? Or maybe you just 
					want to share a cat video (we won't judge)? Either way, you've found the right 
					place! Drop a message, and I'll get back to you faster than a web page loads 
					after clearing the cache. Whether you're looking to build the next tech revolution 
					or just want to chat about robotics and coffee, I'm all ears (and maybe some wires, too). 
					Let's connect! 🚀😊
				</span>
				<div className='contact-container'>
					<div className='inputs-container'>
						<div className='input-container'>
							<span className='input-label'>Full name</span>
							<input 
								className='contact-input' 
								type='text' 
								placeholder='Enter your full name here'
								value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
						</div>
						<div className='input-container'>
							<span className='input-label'>Email Address</span>
							<input 
								className='contact-input' 
								type='email' 
								placeholder='Enter your email address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</div>
					<div className='contact-content-container'>
						<span className='input-label'>Message</span>
						<textarea 
							className='contact-content' 
							placeholder="Drop your message, and let's stay connected!"
							value={message}
							onChange={(e) => {
								const capitalizedMessage = 
								e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
								setMessage(capitalizedMessage);
							}}
						/>
					</div>
					<button
						onClick={HandleSend} 
						className='send-button'
						disabled={isSubmitting}
					>
						<i class="fas fa-paper-plane"></i>
						{isSubmitting ? 'Sending...' : 'Send'}
					</button>
				</div>
			</section>
			<Footer/>
		</>	
	)
}

export default Contact

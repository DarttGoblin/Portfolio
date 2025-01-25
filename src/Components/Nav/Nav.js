import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
	const [isResponsiveNavOpen, setIsResponsiveNavOpen] = useState(false);

    const toggleResponsiveNav = () => {
        setIsResponsiveNavOpen(!isResponsiveNavOpen);
    };

	return (
		<nav>
			<NavLink 
				to='/' 
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				className='brand-link'
			>
				<div className='brand'>
					<span className='yassine'>YASSINE</span>
					<span className='bazgour'>BAZGOUR</span>
				</div>
			</NavLink>

			<div className='nav-links-container'>
				<NavLink 
					to='/' 
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
					className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
				>
					Home
				</NavLink>
				<NavLink 
					to='/Projects' 
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
					className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
				>
					Projects
				</NavLink>
				<NavLink  
					// onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
					// className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
					onClick={() => {alert('No certificates are available at the moment. Please check back later!')}}
					className='nav-link'
				>
					Certificates
				</NavLink>
				<NavLink 
					to='/About' 
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
					className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
				>
					About
				</NavLink>
			</div>

			<div className='contact-mode'>
				<i 
					onClick={() => alert('This mode is not available now! Will be shortly.')}
					className='mode fa fa-sun'
				></i>
				<NavLink 
					to='/Contact' 
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					className={({isActive}) => isActive ? 'contact-link active-contact-link' : 'contact-link'}
				>
					<button className='contact'>
						<i className='far fa-envelope'></i>
						Contact
					</button>
				</NavLink>
			</div>

			<div 
				onClick={toggleResponsiveNav}
				className='settings'
			>
				<div className='settings-line'></div>
				<div className='settings-line'></div>
				<div className='settings-line'></div>
			</div>

			<div 
				className='responsive-nav'
				style={{ display: isResponsiveNavOpen ? 'flex' : 'none' }}
			>
				<div className='responsive-nav-header'>
					<NavLink 
						to='/' 
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className='brand-link'
					>
						<div className='brand'>
							<span className='yassine'>YASSINE</span>
							<span className='bazgour'>BAZGOUR</span>
						</div>
					</NavLink>
					<i 
						onClick={toggleResponsiveNav}
						className='close-res-nav fa fa-times'
					></i>
				</div>

				<div className='responsive-nav-links-container'>
					<div className='responsive-nav-links-container-row'>
						<div className='responsive-nav-link-container'>
							<NavLink 
								to='/' 
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
								className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
							>
								Home
							</NavLink>
						</div>
						<div className='responsive-nav-link-container'>
							<NavLink 
								to='/Projects' 
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
								className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
							>
								Projects
							</NavLink>
						</div>
					</div>
					<div className='responsive-nav-links-container-row'>
						<div className='responsive-nav-link-container'>
							<NavLink  
								// onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
								// className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
								onClick={() => {alert('No certificates are available at the moment. Please check back later!')}}
								className='nav-link'
							>
								Certificates
							</NavLink>
						</div>
						<div className='responsive-nav-link-container'>
							<NavLink 
								to='/About' 
								onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
								className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
							>
								About
							</NavLink>
						</div>
					</div>
				</div>

				<div className='responsive-contact-mode'>
					<i 
						onClick={() => alert('This mode is not available now! Will be shortly.')}
						className='mode fa fa-sun'
					></i>
					<NavLink 
						to='/Contact' 
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
						className={({isActive}) => isActive ? 'contact-link active-contact-link' : 'contact-link'}
					>
						<button className='contact responsive-contact'>
							<i className='far fa-envelope'></i>
							Contact
						</button>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Nav;

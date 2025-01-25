import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import Certificates from './Pages/Certificates/Certificates'
import Contact from './Pages/Contact/Contact'

function App() {
	return (
		<Router>
            <Routes>
				<Route path="/" element={<Home/>}></Route>
				<Route path="/Projects" element={<Projects/>}></Route>
				<Route path="/About" element={<About/>}></Route>
				<Route path="/Certificates" element={<Certificates/>}></Route>
				<Route path="/Contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
	);
}

export default App;

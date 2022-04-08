import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Settings from './components/pages/Settings';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

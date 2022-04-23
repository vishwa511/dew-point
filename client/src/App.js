import logo from './logo.svg';
// import './App.css';
import Home from './Pages/Home';
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from './Components/Navbar/Nav'
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
    <>
	<Nav/>
	<Routes>
	
	<Route path="/" element={<Home/>} />
	<Route path="/Signup" element={<LoginPage/>} />
	<Route path="/Dashboard" element={<Dashboard/>} />
	{/* <Route path="/login" element={<Login />} />
	<Route path="/signup" element={<Signup />} />
	<Route path="/dash" element={<Dash />} />
	 */}
	</Routes>
	</>
  );
}

export default App;

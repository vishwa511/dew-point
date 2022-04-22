import logo from './logo.svg';
import './App.css';
import Hero from './Components/Landing/Hero';
import Nav from './Components/Navbar/Nav';
import Landing2 from './Components/Landing/landing2';
import Landing3 from './Components/Landing/landing3';

function App() {
  return (
    <h1 className="">
		<Nav/>
      <Hero />
      <Landing2 />
      <Landing3 />
    </h1>

  );
}

export default App;

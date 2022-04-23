import React from 'react'
import { Link } from "react-router-dom";
import Hero from '../Components/Landing/Hero';
import Landing2 from '../Components/Landing/landing2';
import Landing3 from '../Components/Landing/landing3';
const Home = () => {
	return(
		<div>
		   <Hero/>
		   <Landing2/>
		   <Landing3/>
		</div>
		)
}
export default Home;
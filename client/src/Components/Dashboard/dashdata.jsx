import React, { useState, useEffect } from 'react';
import Dash from "./dash";
// import { useEffect, useState } from "react";

function Dashdata(){

	const [speakers, setSpeakers] = useState([])

	const fetchData =async()=>{
		await fetch("http://localhost:8080/api/users")
		.then((response) =>{
			return response.json();
		}).then((data) =>{
			console.log(data);
			let speak = data.users;
			console.log(speak);
			setSpeakers(speak)
		})
	}

	useEffect(() => {
		fetchData();
	}, [])
	

	return(
		<div className="min-h-screen bg-pink-300">
			<h1 className="p-4 m-4 text-4xl">These are registered with as</h1>
			<div className="space-y-4">
               
			   {speakers.map(speaker => 
			   
			   <Dash
				   name={speaker.name}
				   description={speaker.des}
				   city={speaker.city}
				   state={speaker.state}
				   zipcode={speaker.zip}
				   />
				   )}
		   
	   </div>
		</div>
	)
}
export default Dashdata;
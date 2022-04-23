import React from "react";

function Dash(props){
	return(
		
			<div className="w-1/2 p-4 m-auto bg-blue-400 rounded-xl">
				<h1 className="text-4xl underline">{props.name}</h1>
				<h2 className="p-4 text-2xl">{props.description}</h2>
				<h2>{props.state}</h2>
				<h2>{props.city}</h2>
				<h2>{props.zipcode}</h2>
			</div>

	)
}
export default Dash;
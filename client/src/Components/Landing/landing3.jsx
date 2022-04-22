import React from "react";

function Landing3(){
	return(
		<div className="flex h-screen bg-blue-200">
			<div className="flex flex-col justify-center m-2 ml-24">
				<h1 className="p-4">LANDING PAGE CREATOR</h1>
				<h1 className="m-4 text-4xl">Creater must click landing page</h1>
				<p className="p-4 mr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit quisquam pariatur explicabo laborum iusto voluptatum inventore modi dolores! Non dicta blanditiis molestias minima voluptate?</p>
				<div>
				<button className="p-4 ml-4 bg-red-400 border">Explore Now</button>
				</div>
			</div>
			<div className="m-4 mt-10 ml-10">
				<img className="w-9/12" src="https://eep.io/images/yzco4xsimv0y/eNFqqMMa27luG04TpNJW0/c93988d7a614479ff822fa7b32d3cfd7/Landing_Page_hero.png?w=1520&fm=webp&q=80" />
			</div>
		</div>
	)
}
export default Landing3;
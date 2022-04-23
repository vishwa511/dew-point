import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-200 md:flex-row">
      <div className="flex flex-col justify-center md:ml-24 lg:m-2">
        <h1 className="p-4 px-0 md:px-24">LANDING PAGE CREATOR</h1>
        <h1 className="px-0 text-4xl md:px-24">
          Want to Show your Special Work???
        </h1>
        <p className="p-4 px-0 sm:mr-10 md:px-24">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          fugit quisquam pariatur explicabo laborum iusto voluptatum inventore
          modi dolores! Non dicta blanditiis molestias minima voluptate?
        </p>
        <div className="px-24">
          <button className="p-4 ml-4 bg-red-400 border">
            <Link to="/Signup" className="p-4">
              Add me
            </Link>
          </button>
        </div>
      </div>
      <div className="m-4 ml-10 md:mt-24 lg:mt-10">
        <img
          className="w-9/12"
          src="https://eep.io/images/yzco4xsimv0y/eNFqqMMa27luG04TpNJW0/c93988d7a614479ff822fa7b32d3cfd7/Landing_Page_hero.png?w=1520&fm=webp&q=80"
        />
      </div>
    </div>
  );
}
export default Hero;

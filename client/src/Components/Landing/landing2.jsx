import React from "react";
import { Link } from "react-router-dom";
function Landing2() {
    return (
        // <div className="flex-c h-14 ">
        // 	<div className="">
        //     <img src="https://eep.io/images/yzco4xsimv0y/2xM9aLUgBPwXcV5mNUVMOW/ce0f910aa94cdfd5890dc5aa4b94dfd5/domain_b_w.png?w=760&fm=webp&q=80" width={"500"}/>
        //     </div>
        //     <div>
        //     <h1 className="text-3xl italic">Your landing page starts with the right domain. Claim yours today</h1>
        //    </div>
        // </div>
        <div className="flex min-h-screen bg-pink-100">
            <div className="flex-none">
            <img src="https://eep.io/images/yzco4xsimv0y/2xM9aLUgBPwXcV5mNUVMOW/ce0f910aa94cdfd5890dc5aa4b94dfd5/domain_b_w.png?w=760&fm=webp&q=80" width={"500"} />
            </div>
            <div className="flex flex-col">
            
            <h1 className="m-20 text-3xl italic">Am i Registered???</h1>
			<button className="p-4 ml-4 bg-red-400 border">
            <Link to="/Dashboard" className="p-4">
              Go to dashboard
            </Link>
          </button>
            </div>
        </div>

    )
}
export default Landing2;
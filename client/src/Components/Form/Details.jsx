import {React, useState}from "react";


function Form(){
	const [name,setName] = useState("");
	const [des, setDes] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zip, setZip] = useState("");

	const collectData=async()=>{
		console.warn(name, des, city, state, zip)
		let result =await fetch('http://localhost:5000/register',{
			method: 'post',
			body: JSON.stringify({name, des, city, state, zip}),
			headers : { 
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			   },
		})
		result = await result.json()
		console.log(4);
		console.warn(result);
	}
	return(
		<div className="flex justify-center min-h-screen bg-red-300">
			<form className="w-full max-w-lg p-4 m-auto bg-green-300 ">
  <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" >
        First Name
      </label>
      <input onChange={(e)=>setName(e.target.value)} value={name} className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
      {/* <p className="text-xs italic text-red-500">Please fill out this field.</p> */}
    </div>
    {/* <div className="w-full px-3 md:w-1/2">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name">
        Last Name
      </label>
      <input className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
    </div> */}
  </div>
  {/* <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
        Password
      </label>
      <input className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
      <p className="text-xs italic text-gray-600">Make it as long and as crazy as you'd like</p>
    </div>
  </div> */}

  <div className="flex flex-wrap mb-6 -mx-3">
    <div className="w-full px-3">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
        description
      </label>
      <input onChange={(e)=>setDes(e.target.value)} value={des} className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Enter about your creativity" />
      <p className="text-xs italic text-gray-600">Be Unique and One of a kind</p>
    </div>
  </div>

  <div className="flex flex-wrap mb-2 -mx-3">
    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
        City
      </label>
      <input onChange={(e)=>setCity(e.target.value)} value={city} className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
    </div>
    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
        State
      </label>
      <div className="relative">
        <select onChange={(e)=>setState(e.target.value)} value={state} className="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>UP</option>
          <option>MP</option>
          <option>AP</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
          <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
        Zip
      </label>
      <input onChange={(e)=>setZip(e.target.value)} value={zip} className="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="902810" />
    </div>
	<div>
		<button className="p-4 m-auto bg-red-300" onClick={collectData} type="submit">Register</button>
	</div>
  </div>
</form>

		</div>
	)
}
export default Form;
import React from 'react'

const Newsletter = () => {
  return (
   
    <div className='border-y-[0.5px] border-gray-200 flex-1  justify-center item-center bg-gradient-to-r from-pink-200 to-blue-200  pb-20 w-[100%]'>
    <div className="p-10 max-sm:text-center sm:pt-20 pb-8 flex justify-center item-center text-gray-900"> <h3 className="mb-2 text-5xl font-semibold  text-gray-900">
Subscribe To Our Newsletter
</h3></div>
<div className="flex justify-center item-center">

{/* <img src="4r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/> */}
<div className="flex items-center justify-center max-sm:px-0 sm:py-6">

<div className="flex flex-wrap bg-black/10 justify-center items-center w-[100%] sm:h-[200px] p-5  text-left  rounded lg:flex-nowrap md:p-8 dark:border-gray-700">

<div className="flex-1 justify-center item-center w-full mb-5 md:mb-0 md:pr-5 lg:pr-10 md:w-1/2">
<h3 className="mb-2 text-2xl font-bold text-gray-900 ">
Transformation Begins Here
</h3>
<p className="text-gray-900 ">
Gear Up To Embark On A Journey Towards A Greatest Feature
</p>
</div>
<div className="w-full px-1 flex-0 md:w-auto lg:w-1/2">
<form action="https://api.web3forms.com/submit" method="POST">
<input
type="hidden"
name="access_key"
// value="103d9f61-759f-4ac3-9b7a-0377c9d138c4"
value="f3745c6d-5003-4bba-891f-e738d122b42a"
/>
<div className="flex flex-col sm:flex-row">
<input
type="email"
id="email"
name="email"
placeholder="Enter your email address"
className="flex-1 px-3 py-2  border border-gray-400 rounded-md sm:mr-5 focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
/>
<button
type="submit"
className="sm:ml-4 w-full px-6 py-4 mt-5 text-white bg-gray-900 rounded-md sm:mt-0 sm:w-auto whitespace-nowrap "
>

Lets's Connect
</button>

</div>
</form>
</div>
</div>
</div>
</div>
</div>

  )
}

export default Newsletter

import Script from 'next/script';
const Form = () => {
  return (
    

<div className=" py-8 sm:py-14  ">  
<div className="pt-28 pb-20 flex justify-center  item-center"> <h3 className="mb-2 max-sm:text-center text-5xl font-semibold  text-gray-700">
Request For Services
</h3></div>

<div className="flex justify-center items-center  sm:mx-20  shadow-2xl shadow-gray-300  ">


<div className='max-sm:hidden formimg bg-gradient-to-tl from-purple-900 to-blue-900 max-md:h-[830px] h-[744px] w-[80%] relative'>
<div>
<img src="/24-7.jpg" className='w-full h-full object-cover absolute mix-blend-overlay'/>
<div className="flex-col justify-center items-center max-sm:px-0 pt-[58vh] px-16">
<h1 className="font-bold text-white py-4 uppercase text-4xl">
Request For Services
</h1>
<h1 className="text-gray-100 w-[90%] max-sm:text-lg  text-lg ">
Eager to propel growth a purposful transformating. We have left an
incredible mark across industries. Now it's time to fuse our expertise
with your belief.
</h1>
</div>
</div>
</div>
<div className="container  border-[1px] border-gray-100 md:px-20 bg-white">
<div className="  px-4 lg:px-2">
<div className="w-full p-8  my-4 md:px-12   bg-white">

<p className=" mb-16  pt-3 leading-8 md:max-w-2xl text-md text-gray-700">
<br />{" "}
<span className="text-3xl sm:text-xl  lg:text-3xl">
Care To Share A Glimps<br/>Of Your Journey
</span>
</p>
<form action="https://api.web3forms.com/submit" method="POST">
<input
type="hidden"
name="access_key"
// value="103d9f61-759f-4ac3-9b7a-0377c9d138c4"
value="f3745c6d-5003-4bba-891f-e738d122b42a"
/>
<div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
<input
className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 
type="text"
placeholder="First Name*"
name="name"
required=""
/>
<input
className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 

type="text"
placeholder="Last Name*"
name="lname"
required=""
/>
<input
className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 

type="email"
placeholder="Email*"
name="email"
required=""
/>
<input
className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:borer-rose-600" 

type="number"
placeholder="Phone*"
name="ph:"
required=""
/>
</div>
<div className="my-4">
<textarea
placeholder="Message*"
className=" peer h-32 w-[100%] border-[1px]  border-gray-400 text-gray-900 mt-2 p-3 rounded-sm  focus:outline-none focus:shadow-outline"
name="msg"
required=""
defaultValue={""}
/>
</div>
<div className="my-2 mt-[-20px] ">

<div className="bdy ">

<button className="arrr" type="submit">
<span className="text-sm flex item-center">Send</span>
<div className="liquid"></div>
</button> </div>
</div>
</form>
        <Script src="https://web3forms.com/client/script.js" async defer></Script>

</div></div>
</div>
</div>
</div>  

  )
}

export default Form
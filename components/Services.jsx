import React from "react";
import Image from "next/image";
import Link from 'next/link';



const Services = () => {
  return (
    <>

<div className="flex flex-col md:flex-row bg-blue-900 text-white p-8 rounded-lg max-w-6xl mx-auto mt-20">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col justify-center p-6">
        <h2 className="text-3xl font-bold mb-4">Enhance Your Customer Experience</h2>
        <p className="text-lg">
        Enhance your customer interactions with seamless and efficient service solutions. By leveraging innovative strategies, you can improve response times, boost satisfaction, and build lasting relationships.
        </p>
      </div>
      
      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/service.jpg" 
          alt="Customer Service AI"
          className="rounded-lg w-full object-cover"
        />
      </div>
    </div>

<div className="bg-gray-100 min-h-screen p-20">
  <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
    Our Delivery Accelerators
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Design Section */}
    <div className="bg-gray-300 p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <Image src="/designicon.png" alt="Design Icon" width={60} height={60} />
      </div>
      <h3 className="text-xl font-semibold">Design</h3>
      <div className=" p-6 rounded-lg text-gray-700">
  <p className="mt-4">
  We craft intuitive and visually appealing user experiences tailored to your business needs. Our design process focuses on usability, aesthetics, and functionality to create seamless digital interactions that enhance customer engagement.
  </p>
</div>
    </div>

    {/* Develop Section */}
    <div className="bg-gray-300  p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <Image src="/developicon.png" alt="Develop Icon" width={60} height={60} />
      </div>
      <h3 className="text-xl font-semibold">Develop</h3>
      <div className=" p-6 rounded-lg text-gray-700">
  <p className="mt-4">
  Our development team transforms ideas into reality by building scalable, high-performance solutions. Using cutting-edge technologies, we ensure secure, efficient, and robust applications that drive business growth.
  </p>
</div>
    </div>

    {/* Manage Section */}
    <div className="bg-gray-300  p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <Image src="/manageicon.png" alt="Manage Icon" width={60} height={60} />
      </div>
      <h3 className="text-xl font-semibold">Manage</h3>
      <div className=" p-6 rounded-lg text-gray-700">
  <p className="mt-4">
  We provide end-to-end management services to keep your systems running smoothly. From monitoring and maintenance to continuous improvements, we ensure optimal performance, security, and scalability.
  </p>
</div>
    </div>

  </div>
</div>


<section className="py-10 sm:py-12 lg:py-16 z-40">
  <div className="px-4 mx-auto items-center flex flex-col">
    <h2 className="text-4xl px-4 font-bold text-center text-black sm:text-4xl lg:text-5xl">
      <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-400 inline">
        Services
      </span> We Offer
    </h2>
        <p className="sm:mb-20 mb-10  px-4 mx-auto pt-4 text-center  text-md text-gray-700">
        </p>
        <div className="grid grid-cols-1 gap-10 px-10 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
            <Link href="/services/ai" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Discover<br/>Augmental AI</h2>
                                <p className="text-sm font-light text-white ">Shaping a Limitless<br/>Tomorrow </p>
                            </div>
                        </div>
                    </div>
                    <img src=".././augmentalai.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/multicloud-computing" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s]">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">MultiCloud <br/>Computing</h2>
                                <p className="text-sm font-light text-white">Simplifying Complexities,<br/>Maximizing Value</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././multicloud.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/application-development" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Application<br/>Development</h2>
                                <p className="text-sm font-light text-white">Tailored Solutions for<br/>Your Unique Needs</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././appdev.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/data-analytics" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Data &<br/>Analytics</h2>
                                <p className="text-sm font-light text-white"> Unleash Your Business's<br/>Untapped Potential</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././data.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/it-consultation" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Strategic IT<br/>Consultation</h2>
                                <p className="text-sm font-light text-white">Your Pathway to Success<br/>in the Digital Era</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././trainings3.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/time-material" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">Time &<br/>Material</h2>
                                <p className="text-sm font-light text-white">Measurable Results,<br/>Consistently Delivered</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././time-materials.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/24-7" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white mb-6 pb-4">24/7</h2>
                                <p className="text-sm font-light  text-white">Support That Exceeds<br/>Your Imagination</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././24--7service.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
            <Link href="/services/training-development" className="shadow-sm relative hover:-translate-y-5 hover:scale-101 duration-[1s] ">
                <div className="  h-full relative shadow-sm rounded-xl  overflow-hidden group ">
                    <div className=" absolute -bottom-10 top-14 group-hover:top-0 left-0 w-full h-full group-hover:bg-black/60 transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                            <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                                <h2 className="text-2xl font-bold  text-white stroke-2 stroke-black mb-6 pb-4">Training &<br/>Recruitment</h2>
                                <p className="text-sm font-light text-white">Crafting<br/>Industry-Ready Talent</p>
                            </div>
                        </div>
                    </div>
                    <img src=".././trainings.jpg" className="w-full z-0  h-full    object-fill example "/>
                </div>
            </Link>
        </div>
    </div>

    <div className="bg-white py-16">
      <h2 className="text-3xl font-bold text-center text-stone-950 mb-12">
        Advantage of BeauRoi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
        
        {/* Better */}
        <div className="flex flex-col items-center">
          <Image src="/smarticon.png" alt="Better" width={80} height={80} />
          <h3 className="text-xl font-semibold mt-4">Smarter</h3>
          <p className="text-gray-600 mt-2">Intelligent. Precise. Efficient.</p>
        </div>

        {/* Faster */}
        <div className="flex flex-col items-center">
          <Image src="/strongicon.png" alt="Faster" width={80} height={80} />
          <h3 className="text-xl font-semibold mt-4">Stronger</h3>
          <p className="text-gray-600 mt-2">Reliable. Scalable. Secure.</p>
        </div>

        {/* Cheaper */}
        <div className="flex flex-col items-center">
          <Image src="/simpleicon.png" alt="Cheaper" width={80} height={80} />
          <h3 className="text-xl font-semibold mt-4">Simpler</h3>
          <p className="text-gray-600 mt-2">Streamlined. Intuitive. Hassle-free.</p>
        </div>

      </div>
    </div>



</section>
</>
  )
}
export default Services
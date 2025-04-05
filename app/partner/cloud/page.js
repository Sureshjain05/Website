"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const industries = [
  { name: "Healthcare Service", icon: "/healthicon.png" },
  { name: "Education", icon: "/educationicon.png" },
  { name: "Hotel and Food Chain", icon: "/hotelicon.png" },
  { name: "Manufacturing", icon: "/manufacturingicon.png" },
  { name: "Banking and Finance service", icon: "/providericon.png" },
  { name: "Insurance", icon: "/healthicon.png" },
  { name: "E-Commerce", icon: "/onlineicon.png" },
  { name: "Retail and Marketing", icon: "/retailicon.png" },
];


const solutions = [
  { name: "SAP on Google Cloud", icon: "/sapicon.png" },
  { name: "Mobile Application Development", icon: "/mobdevicon.png" },
  { name: "Streaming Data Analytics", icon: "/streamicon.png" },
  { name: "Data Science Development", icon: "/scienceicon.png" },
  { name: "E-Commerce App Modernization", icon: "/ecommerceicon.png" },
  { name: "VM Migration", icon: "/vmicon.png" },
  { name: "Looker Embedded Analytics", icon: "/lookericon.png" },
  { name: "Marketing Science", icon: "/marketingicon.png" },
];



const bankingData = [
  {
    image: "/aiml.jpg",
    title: "Artificial Intelligence & Machine Learning",
    description: "Scalable AI-driven solutions for automation, personalization, and predictive analytics."
  },
  {
    image: "/dataservice.jpg",
    title: "Data and Analytics",
    description: "Big data analytics, data migration, governance, security, and business intelligence."
  },
  {
    image: "/cloudservice.webp",
    title: "Cloud Strategy & Consulting",
    description: "Multi-cloud and hybrid cloud solutions for optimized performance and cost savings."
  },
  {
    image: "/appservice.jpg",
    title: "Application Modernization & Development",
    description: "Custom-built applications that enhance user experience and operational efficiency."
  },
  {
    image: "/compilanceservice.jpg",
    title: "Security & Compliance",
    description: "Robust cybersecurity measures, compliance frameworks, and risk management solutions."
  },
  {
    image: "/infraservice.png",
    title: "Managed Services & IT Infrastructure",
    description: "24/7 support, infrastructure modernization, and IT resource management."
  },
  {
    image: "/digitalservice.jpg",
    title: "Digital Workplace & Collaboration",
    description: "Cloud-based workplace transformation with seamless productivity tools."
  },
  {
    image: "/trainingservice.webp",
    title: "Training & Workforce Development",
    description: "Upskilling programs to empower professionals with the latest in AI, cloud, and data analytics."
  },
];


const Page = () => {

    const sliderRef = useRef(null);
    const cardWidth = 310; // Card width + gap
  
    const scrollLeft = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    };
  
    const scrollRight = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

  return (

    <div className="flex flex-col items-center p-8 mt-16 bg-white-100">
      <div className="relative w-screen bg-cover bg-center py-16 px-4" style={{ backgroundImage: "url('/cloudbg.jpg')" }}>
  {/* Optional Overlay for better readability */}
  <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>

  {/* Content Container */}
  <div className="relative max-w-5xl mx-auto bg-white bg-opacity-60 p-8 rounded-xl shadow-lg">
    <h2 className="text-3xl font-bold text-center text-blue-900">
      What We Do With Google Cloud
    </h2>

    <div className="flex flex-col md:flex-row mt-8 gap-6 w-full">
      {/* Video/Image Section */}
      <div className="relative w-full md:w-1/2 rounded-xl p-4 flex items-center justify-center">
        <img
          src="/cloud1.webp"
          alt="Google Cloud Awards"
          className="rounded-lg"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full md:w-1/2 bg-green-500 text-white text-lg p-6 rounded-xl flex items-center justify-center">
        <p>
          At Beau Roi, we develop, deploy, and optimize cloud-native applications on Google Cloud. Our
          solutions ensure scalability, security, and efficiency, enabling businesses to
          unlock the full potential of cloud technology.<br/><br/>
          We are committed to delivering trust, transparency, and flexibility while driving digital innovation for businesses worldwide.
        </p>
      </div>
    </div>
  </div>
</div>


      <div className="flex flex-col items-center p-8 bg-gray-100 mt-12" >
      <h2 className="text-2xl font-bold text-center text-blue-900">Sector</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full max-w-5xl">
        {industries.map((industry, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={industry.icon} alt={industry.name} className="w-12 h-12 mb-2" />
            <p className="text-sky-700 font-medium">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="flex flex-col items-center p-8 bg-slate-50-600 mt-12 rounded-lg w-screen">
      <h2 className="text-2xl font-bold text-center text-blue-900">Solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 w-full max-w-5xl">
        {solutions.map((solution, index) => (
          <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-xl">
            <img src={solution.icon} alt={solution.name} className="w-12 h-12 mb-2" />
            <p className="text-blue-900 font-medium">{solution.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="relative w-full max-w-5xl mx-auto py-10 px-4 md:px-6">
  <div className="flex flex-col items-center w-full p-4 md:p-10 relative">
    {/* Title */}
    <h2 className="text-2xl md:text-4xl font-bold text-stone-950 text-center mb-6">
      Our Services
    </h2>

    {/* Slider Container */}
    <div className="relative w-full flex items-center justify-center">
      {/* Left Button (Hidden on Mobile) */}
      <button
        onClick={scrollLeft}
        className="hidden md:block absolute left-[-40px] md:left-[-60px] top-1/2 transform -translate-y-1/2 p-3 md:p-4 bg-white shadow-lg rounded-full z-10"
      >
        <FaChevronLeft className="text-blue-900 text-lg md:text-xl" />
      </button>

      {/* Slider */}
      <div className="relative w-full max-w-[960px] mx-auto overflow-hidden">
        <div className="relative w-full overflow-x-auto md:overflow-hidden scrollbar-show md:scrollbar-hide">
          <div
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-hidden scroll-smooth flex-nowrap md:flex-nowrap"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {bankingData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-60 min-w-[240px] md:w-72 md:min-w-[280px] bg-white shadow-lg rounded-xl overflow-hidden scroll-snap-align-start pb-4 md:pb-6"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 md:h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Button (Hidden on Mobile) */}
      <button
        onClick={scrollRight}
        className="hidden md:block absolute right-[-40px] md:right-[-60px] top-1/2 transform -translate-y-1/2 p-3 md:p-4 bg-white shadow-lg rounded-full z-10"
      >
        <FaChevronRight className="text-blue-900 text-lg md:text-xl" />
      </button>
    </div>
  </div>
</div>


      
      {/* Full-Screen Public Sector Section */}
      <div className="w-screen bg-orange-500 py-12 text-center mt-6 overflow-hidden">
  <h2 className="text-2xl font-bold text-gray-900">Business Impact</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 max-w-6xl mx-auto px-4">
    {[
      {
        img: "/user.png",
        title: "Enhance User Experience",
        desc: "We build intuitive and high-performance applications powered by AI and automation, ensuring seamless interactions and a superior customer experience."
      },
      {
        img: "/streamicon.png",
        title: "Streamline Operations",
        desc: "By leveraging cloud automation and DevOps best practices, we optimize processes, accelerate deployments, and enhance operational agility."
      },
      {
        img: "/dataicon.png",
        title: "Data-Driven Decision Making",
        desc: "With advanced Data Analytics, AI, and Machine Learning, we empower businesses with real-time insights to drive smarter, faster decisions."
      },
      {
        img: "/cloudicon.png",
        title: "Cloud-First Transformation",
        desc: "From application modernization to secure cloud migration, we help businesses fully embrace the power of Google Cloud with a future-ready approach."
      },
    ].map((industry, index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
        <img src={industry.img} alt={industry.title} className="w-16 h-16 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">{industry.title}</h3>
        <p className="text-gray-700 mt-2">{industry.desc}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Page;

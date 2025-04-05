"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const bankingData = [
  {
    title: '"Great POS System!"',
    description:
      "Switching to Infopulse POS was a game-changer! It's fast, easy to use, and streamlines sales and inventory management. The real-time reports make tracking performance effortless, helping us make smarter business decisions.",
    image: "/POS.avif",
  },
  {
    title: '"Efficient and All-in-One Solution!"',
    description:
      "Infopulse ERP System has streamlined our operations by integrating inventory, finance, HR, and customer management. It's user-friendly and provides real-time data for better decision-making. Highly recommended!",
    image: "/ERP.avif",
  },
  {
    title: '"Smarter Decisions with PETALL!"',
    description:
      "Using BeauRoi PETALL Platform has transformed our operations! It's fast, user-friendly, and simplifies our workflow. The real-time insights make tracking performance effortless, helping us grow our business with confidence.",
    image: "/PETALL.webp",
  },
  {
    title: '"A Perfect Solution for Our Online Store!"',
    description:
      "BeauRoi made setting up my online store effortless! They provided a user-friendly, fast, and feature-rich platform tailored to my needs. Managing inventory, orders, and payments is seamless, helping me grow my business with ease. Highly recommended for anyone looking for a custom eCommerce solution",
    image: "/Ecom.avif",
  },
  {
    title: '"Effortless Property Management System!"',
    description:
      "Infopulse Property Management System has completely streamlined our operations! Managing tenants, leases, and payments is now easier than ever. The system is user-friendly, efficient, and saves us valuable time. Highly recommended!",
    image: "/PMS.avif",
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
    <div className="bg-white-100">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center md:items-start min-h-[70vh] py-10 px-8 mt-20 bg-stone-400"
       style={{ backgroundImage: "url('/appbg.jpg')" }}
       >

<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

  <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    
    {/* Left Text Section */}
    <div className="w-full md:w-2/3 text-center md:text-right bg-gray-300 bg-opacity-90 rounded-lg p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-950 leading-tight mb-4">
        Application Development
        <br />
        <br />
      </h1>
      <p className="text-lg text-gray-700 mt-4">
      Beauroi delivers bespoke, high-performance application development solutions, transforming your vision into scalable, efficient, and future-ready software.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-300 rounded-lg p-4">
      <img
        src="/appdev.jpg"
        alt="Medical Imaging"
        className="w-full max-w-[300px] h-auto rounded-lg shadow-lg"
      />
    </div>

  </div>
</div>


      {/* Overview Section - Centered and No Gap */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-10 min-h-[300px] w-full gap-12 md:gap-36">
  {/* Left Text Section */}
  <div className="max-w-lg w-full text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
    Application Development: Tailored for Excellence
    </h2>
    <p className="text-gray-700 mt-4 leading-relaxed">
    Unleash the full potential of customized software with our bespoke Application Development services. In today’s digital landscape, businesses require tailored solutions to stay ahead of the competition and optimize operations. At our organization, we specialize in crafting personalized software solutions that align perfectly with your unique needs, ensuring seamless functionality and superior user experiences. <br/><br/> Whether you need agile utilities to streamline everyday processes or complex enterprise applications to manage large-scale operations, our expert developers bring innovation, precision, and scalability to every project. By leveraging cutting-edge technologies and industry best practices, we create software that not only solves challenges but also unlocks new opportunities for growth.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex items-center justify-center w-full">
    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-200">
      <img
        src="/appdev.png"
        alt="Overview Icon"
        className="w-28 h-28 md:w-34 md:h-34"
      />
    </div>
  </div>
</div>

{/* Second Section */}
<div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-10 min-h-[300px] w-full gap-12 md:gap-36">
  {/* Left Image Section */}
  <div className="flex items-center justify-center w-full">
    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-200">
      <img
        src="/solution.png"
        alt="Solution Icon"
        className="w-28 h-28 md:w-36 md:h-36"
      />
    </div>
  </div>

  {/* Right Text Section */}
  <div className="max-w-lg w-full text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
    Your Application Development Journey at Beauroi
    </h2>
    <p className="text-gray-700 mt-4 leading-relaxed">
    At Beauroi, we believe that software should be more than just a tool—it should be a catalyst for transformation. Our application development journey begins with a deep understanding of your vision, operational needs, and long-term objectives. Through collaborative ideation, we design and build intuitive, high-performance applications that seamlessly integrate with your existing systems.<br/><br/> We leverage the latest technologies, industry best practices, and agile methodologies to ensure flexibility, security, and scalability. From initial concept and development to deployment and ongoing support, our team ensures a seamless experience, allowing you to stay ahead in an increasingly competitive digital world. With Beauroi, your vision becomes reality through flawlessly crafted, innovative software solutions.
    </p>
  </div>
</div>



    <div className="flex justify-center py-10">
        <div className="bg-slate-400 text-neutral-950 py-10 px-8 rounded-2xl shadow-lg max-w-6xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Business Growth</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Impact Item 1 */}
            <div className="flex flex-col items-center">
              <img src="/security.png" alt="Accuracy" className="w-16 h-16 mb-2" />
              <p>Enhanced Security & Compliance</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-neutral-950"></div>

            {/* Impact Item 2 */}
            <div className="flex flex-col items-center">
              <img src="/flexbility.png" alt="Speed" className="w-16 h-16 mb-2" />
              <p> Increased Efficiency & Productivity </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-neutral-950"></div>

            {/* Impact Item 3 */}
            <div className="flex flex-col items-center">
              <img src="/cost.png" alt="Cost Reduction" className="w-16 h-16 mb-2" />
              <p>Cost Optimization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-5xl mx-auto py-10 px-6">
      <div className="flex items-center gap-10">
    <div className="flex flex-col items-center w-full p-6 md:p-10 relative">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-stone-950 text-center mb-6">
        Customer Reviews
      </h2>

      {/* Buttons Outside the Box */}
      <div className="relative w-full flex items-center justify-center">
        {/* Left Button (Outside the Box) */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-50px] md:left-[-80px] top-1/2 transform -translate-y-1/2 p-3 md:p-4 bg-white shadow-lg rounded-full z-10"
        >
          <FaChevronLeft className="text-blue-900 text-lg md:text-xl" />
        </button>

        {/* Slider Section */}
        <div className="relative w-full max-w-[960px] mx-auto overflow-hidden">
          {/* Slider Wrapper */}
          <div className="relative overflow-hidden w-full">
            {/* Slider */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-hidden w-full"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
                overflowX: "hidden", // Hides scrollbar
              }}
            >
              {bankingData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-64 min-w-[260px] md:w-72 md:min-w-[280px] bg-white shadow-lg rounded-xl overflow-hidden scroll-snap-align-start"
                >
                  <img src={item.image} alt={item.title} className="w-full h-36 md:h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Button (Outside the Box) */}
        <button
          onClick={scrollRight}
          className="absolute right-[-50px] md:right-[-80px] top-1/2 transform -translate-y-1/2 p-3 md:p-4 bg-white shadow-lg rounded-full z-10"
        >
          <FaChevronRight className="text-blue-900 text-lg md:text-xl" />
        </button>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};



export default Page;



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
      "Using Beau Roi PETALL Platform has transformed our operations! It's fast, user-friendly, and simplifies our workflow. The real-time insights make tracking performance effortless, helping us grow our business with confidence.",
    image: "/PETALL.webp",
  },
  {
    title: '"A Perfect Solution for Our Online Store!"',
    description:
      "Beau Roi made setting up my online store effortless! They provided a user-friendly, fast, and feature-rich platform tailored to my needs. Managing inventory, orders, and payments is seamless, helping me grow my business with ease. Highly recommended for anyone looking for a custom eCommerce solution",
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
      <div className="relative flex flex-col md:flex-row items-center md:items-start min-h-[70vh] py-10 px-8 mt-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/aibg.webp')" }} // Add your image
>
  {/* Overlay to reduce opacity */}
  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

  {/* Content Wrapper */}
  <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    
    {/* Left Text Section */}
    <div className="w-full md:w-2/3 text-center md:text-right bg-gray-300 bg-opacity-90 rounded-lg p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-950 leading-tight mb-4">
        Discover Augmental AI  
        <br />
        <span className="text-teal-950">Shaping a Limitless Tomorrow</span>
      </h1>
      <p className="text-lg text-gray-700 mt-2">
        Beau Roi empowers businesses with Augmental AI, transforming data into 
        intelligence and decisions into success.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-300 rounded-lg p-4">
  <img
    src="/augmentalai.jpg"
    alt="Medical Imaging"
    className="max-w-[300px] h-auto rounded-lg shadow-lg"
  />
</div>

  </div>
</div>



      {/* Overview Section - Centered and No Gap */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-6 md:p-10 min-h-[300px] w-full gap-12 md:gap-36">
  {/* Left Text Section */}
  <div className="max-w-lg w-full text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
      Augmental AI: Beyond Artificial Intelligence
    </h2>
    <p className="text-gray-700 mt-4 leading-relaxed">
      Augmental AI isn’t just about artificial intelligence—it represents a paradigm shift in how we work, think, and innovate. Augmentative intelligence transcends simple task automation, redefining industries, enhancing decision-making, and unlocking unprecedented potential.<br/><br/>
      Our experience with Augmental AI stands as a testament to one fundamental truth: innovation is only constrained by the limits of data and imagination. When harnessed correctly, AI becomes more than a tool—it becomes a force multiplier, driving transformation and amplifying human capabilities.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex items-center justify-center w-full">
    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-200">
      <img
        src="/overview.jpg"
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
      Your AI Journey with Beau Roi
    </h2>
    <p className="text-gray-700 mt-4 leading-relaxed">
      At Beau Roi, we don’t just implement AI; we guide you through this revolutionary journey. From raw data to actionable insights, we ensure AI-driven success at every step. With our expertise, your organization can embrace the full power of Augmental AI, turning complexity into clarity and potential into progress.<br/><br/>
      Let Beau Roi lead the way—where data meets decision, and intelligence meets impact.
    </p>
  </div>
</div>



    <div className="flex justify-center py-10">
        <div className="bg-slate-400 text-neutral-950 py-10 px-8 rounded-2xl shadow-lg max-w-6xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Business Growth</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Impact Item 1 */}
            <div className="flex flex-col items-center">
              <img src="/smart.png" alt="Accuracy" className="w-16 h-16 mb-2" />
              <p>Smarter Decision-Making</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-neutral-950"></div>

            {/* Impact Item 2 */}
            <div className="flex flex-col items-center">
              <img src="/innovation.png" alt="Speed" className="w-16 h-16 mb-2" />
              <p>Innovation Acceleration</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-neutral-950"></div>

            {/* Impact Item 3 */}
            <div className="flex flex-col items-center">
              <img src="/cost.png" alt="Cost Reduction" className="w-16 h-16 mb-2" />
              <p>Cost Reduction & Efficiency Gains</p>
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



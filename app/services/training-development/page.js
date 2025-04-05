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
       style={{ backgroundImage: "url('/trainingbg.webp')" }}
       >

<div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

  <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
    
    {/* Left Text Section */}
    <div className="w-full md:w-2/3 text-center md:text-right bg-gray-300 bg-opacity-90 rounded-lg p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-teal-950 leading-tight mb-4">
      Training & Recruitment
        <br />
        <br />
      </h1>
      <p className="text-lg text-gray-700 mt-4">
      Beauroi’s Training & Recruitment services provide industry-ready tech talents, ensuring seamless integration, innovation, and long-term business success.
      </p>
    </div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-300 rounded-lg p-4">
      <img
        src="/trainings.jpg"
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
    Training & Recruitment: Elevating Your Workforce
    </h2>
    <p className="text-gray-700 mt-4 leading-relaxed">
    Our industry-ready tech talents serve as a finely-tuned addition to your team, seamlessly integrating into your projects to enhance efficiency and drive innovation. In today’s competitive landscape, businesses need skilled professionals who can adapt quickly, tackle challenges head-on, and deliver results without delays. Through our specialized training and recruitment services, we bridge the talent gap by providing highly skilled experts who align with your business objectives. Whether you need fresh talent equipped with the latest industry knowledge or experienced professionals ready to make an immediate impact, our solutions ensure that your workforce remains agile and future-ready.
    </p>
  </div>

  {/* Right Image Section */}
  <div className="flex items-center justify-center w-full">
    <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-200">
      <img
        src="/trainingr.png"
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
    The Journey of Training & Recruitment at Beauroi
    </h2>
    <p className="text-gray-700 mt-4 leading-relaxed">
    At Beauroi, we go beyond conventional hiring practices, offering a strategic approach to workforce development. Our journey begins with identifying your unique staffing needs and curating a pool of highly skilled professionals who fit seamlessly into your company culture. Through continuous training and skill enhancement programs, we ensure that our talents stay ahead of industry trends and technological advancements. <br/><br/> Our recruitment process focuses on precision and efficiency, delivering professionals who not only meet your technical requirements but also contribute to your long-term success. With Beauroi, you gain more than just employees—you gain dedicated experts committed to driving your business forward.
    </p>
  </div>
</div>



    <div className="flex justify-center py-10">
        <div className="bg-slate-400 text-neutral-950 py-10 px-8 rounded-2xl shadow-lg max-w-6xl w-full text-center">
          <h2 className="text-3xl font-bold mb-6">Business Growth</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            {/* Impact Item 1 */}
            <div className="flex flex-col items-center">
              <img src="/hr.png" alt="Accuracy" className="w-16 h-16 mb-2" />
              <p>Faster Talent Acquisition</p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-neutral-950"></div>

            {/* Impact Item 2 */}
            <div className="flex flex-col items-center">
              <img src="/flexbility.png" alt="Speed" className="w-16 h-16 mb-2" />
              <p>Improved Employee Productivity </p>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-neutral-950"></div>

            {/* Impact Item 3 */}
            <div className="flex flex-col items-center">
              <img src="/cost.png" alt="Cost Reduction" className="w-16 h-16 mb-2" />
              <p>Cost Savings on Hiring & Onboarding</p>
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



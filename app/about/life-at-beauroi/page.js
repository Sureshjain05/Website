"use client"

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    "/BR1.jpg",
    "/BR2.jpg",
    "/BR10.jpg",
    "/BR11.jpg",
    "/BR12.jpg",
    "/BR13.jpg",
    "/BR7.jpg",
    "/BR8.jpg",

  ];


  const testimonials = [
    {
      id: 1,
      name: "Premchandar Ilankumaran",
      position: "Director - Cloud",
      image: "/Prem PP.png",
      feedback:
        "Working at Beau Roi has been an incredible experience. The culture is innovative, and I feel valued every day!",
    },
    {
      id: 2,
      name: "Kamalutheen A",
      position: "Director - Application",
      image: "/Kamal.png",
      feedback:
        "Beau Roi has given me countless opportunities to grow. I truly enjoy collaborating with my talented teammates!",
    },
    {
      id: 3,
      name: "Pranesh PK",
      position: "Business Development Executive",
      image: "/Pranesh PK.png",
      feedback:
        "The work-life balance and career growth here are amazing. I feel empowered to bring my best every day!",
    },
    {
      id: 4,
      name: "Joseph Crosvin",
      position: "Director - Sales",
      image: "/Joseph Crosvin.png",
      feedback:
        "Beau Roi fosters a creative and collaborative environment where ideas are valued. It's a fantastic place to grow and innovate!",
    },
    {
      id: 5,
      name: "Gayathri Rajagopalan",
      position: "HR Manager",
      image: "/Gayathiri.png",
      feedback:
        "The opportunities for learning and development at Beau Roi are unmatched. Every day brings a new challenge and a chance to excel!",
    },
    {
      id: 6,
      name: "Sanjay GS Krishna",
      position: "Public Relations Officer (PRO)",
      image: "/Sanjay GS.png",
      feedback:
        "The supportive leadership and teamwork culture at Beau Roi make it a great place to work. I feel truly appreciated here!",
    },
  ];
  const countries = [
    { name: "Singapore", flag: "https://flagcdn.com/48x36/sg.png" },
    { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
    { name: "South Africa", flag: "https://flagcdn.com/48x36/za.png" },
    { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  ];




const LifeAtCompany = () => {


    const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };


    return (
      <section className="text-center p-6 mt-20">
        <h2 className="text-2xl font-bold text-blue-900">Life at Beau Roi</h2>
        <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
        We make sure our teams feel valued and celebrated. Team lunches and exciting team-building activities are just a 
        few ways we appreciate their dedication. Experience our dynamic work culture that recognizes hard work and a 
        commitment to excellence.
        </p>

        <div className="container mx-auto p-4 mt-10">
  <h2 className="text-center text-2xl font-bold mb-6">Our Team Moments</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {images.map((src, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md">
        <img
          src={src}
          alt={`Gallery ${index + 1}`}
          className="w-full h-48 object-cover rounded-md hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>

    <div className="flex flex-col md:flex-row items-start bg-white p-6 md:p-10 max-w-6xl mx-auto relative mt-10 gap-16">
      {/* Left Content - Aligned to Top */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 text-start">
          Why Beau Roi ?
        </h2>
        <p className="text-gray-700 mt-4 text-1xl leading-relaxed text-start">
        At Beau Roi, we foster a culture of innovation, collaboration, and growth. With mentorship programs, 
        challenging projects, and clear career advancement opportunities, we empower our team to thrive. 
        We prioritize work-life balance, open communication, and continuous learning, making Beau Roi the perfect place to 
        build your future.
        </p>
      </div>


      <div className="w-full md:w-2/5 relative flex justify-center md:justify-end mt-6 md:mt-0">

        <div className="hidden md:block absolute -top-4 -left-4 w-10 h-10 bg-transparent border-t-2 border-l-2 border-blue-300"></div>

        <div className="hidden md:block absolute -bottom-4 -right-4 w-10 h-10 bg-transparent border-b-2 border-r-2 border-blue-300"></div>

        <img
          src="/BR8.jpg"
          alt="Diversity and Inclusion"
          className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-full"
        />
      </div>
    </div>


    <div className="flex flex-col md:flex-row-reverse items-start bg-white p-6 md:p-10 max-w-6xl mx-auto relative mt-10 gap-16">

  <div className="w-full md:w-1/2 flex flex-col justify-start">
    <h2 className="text-xl md:text-2xl font-bold text-blue-900 text-start">
      Our Culture
    </h2>
    <p className="text-gray-700 mt-4 text-1xl leading-relaxed text-start">
    At Beau Roi, our culture is built on collaboration, inclusivity, and innovation. 
    We embrace diversity and create an environment where every voice is valued, ideas are celebrated, 
    and teamwork drives success. With a strong focus on mutual respect and continuous learning, 
    we empower our people to grow both professionally and personally. Whether it’s fostering creativity, 
    promoting work-life balance, or encouraging open communication, we ensure that Beau Roi is a place where everyone feels 
    inspired, supported, and motivated to achieve their best.
    </p>
  </div>

  {/* Left Image with Decorations */}
  <div className="w-full md:w-2/5 relative flex justify-center md:justify-start mt-6 md:mt-0">
    {/* Top Left Dotted Decoration (Only visible on large screens) */}
    <div className="hidden md:block absolute -top-4 -left-4 w-10 h-10 bg-transparent border-t-2 border-l-2 border-blue-300"></div>

    {/* Bottom Right Dotted Decoration (Only visible on large screens) */}
    <div className="hidden md:block absolute -bottom-4 -right-4 w-10 h-10 bg-transparent border-b-2 border-r-2 border-blue-300"></div>

    {/* Image */}
    <img
      src="/culture.jpg"
      alt="Diversity and Inclusion"
      className="rounded-lg shadow-lg w-full h-auto max-w-xs md:max-w-full"
    />
  </div>
</div>



<div className="max-w-4xl mx-auto p-6 text-center mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        Employee Testimonials
      </h2>
      <p className="text-gray-600 mt-2">
        Hear what our employees have to say about working at Beau Roi!
      </p>

      <div className="relative flex items-center justify-center mt-8">
        {/* Left Arrow */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 p-2 text-blue-700 hover:text-blue-900 transition"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Testimonial Card */}
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto"
        >
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 shadow-md"
          />
          <p className="text-gray-700 italic">"{testimonials[currentIndex].feedback}"</p>
          <h3 className="mt-4 text-lg font-semibold text-blue-900">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-gray-500 text-sm">{testimonials[currentIndex].position}</p>
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 p-2 text-blue-700 hover:text-blue-900 transition"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>




    <div className="max-w-6xl mx-auto text-center mt-10 p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
        Our Global Beau Roi Team
      </h2>
      <p className="text-gray-600 mt-2">
      Our diverse team embodies our dedication to fostering sustainable growth within our industry and communities.
      </p>

      {/* Flag Grid */}
      <div className="bg-gray-100 p-6 rounded-lg mt-6 shadow-md flex justify-center">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {countries.map((country, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="p-2 bg-white rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
          <img src={country.flag} alt={country.name} className="w-12 h-8 rounded-sm" />
        </div>
        <p className="text-gray-700 text-sm mt-2">{country.name}</p>
      </div>
    ))}
  </div>
</div>

    </div>




      </section>
    );
  };
  
  export default LifeAtCompany;
  
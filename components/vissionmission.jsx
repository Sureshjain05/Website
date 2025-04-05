'use client'

import { useEffect, useState, useRef } from "react";

export default function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  

  return (
    <div ref={sectionRef} className="max-w-6xl mx-auto my-5 p-10">
      {/* Vision Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <img
          src="/vision.jpeg"
          alt="Vision"
          className={`w-[250px] md:w-[300px] h-auto rounded-lg shadow-lg object-cover transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        />
        
        {/* Text */}
        <div className={`text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Vision</h2>
          <p className="text-gray-700 mt-4 text-lg">
          Our business to leverage the full potential of multi-cloud environments. We believe that no two organisations are alike, and therefore, their cloud strategies should be just as unique.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 mt-16">
        {/* Image */}
        <img
          src="/mission.jpeg"
          alt="Mission"
          className={`w-[250px] md:w-[300px] h-auto rounded-lg shadow-lg object-cover transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        />

        {/* Text */}
        <div className={`text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Our Mission</h2>
          <p className="text-gray-700 mt-4 text-lg">
          To be your guiding light, simplify the complexities of multi-cloud environments and empower your organisation to harness their full potential.
          </p>
        </div>
      </div>

      {/* Work Ethics Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 mt-16">
        {/* Image */}
        <img
          src="/workethics.webp" // Update with actual image path
          alt="Work Ethics"
          className={`w-[250px] md:w-[300px] h-auto rounded-lg shadow-lg object-cover transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        />

        {/* Text */}
        <div className={`text-center md:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Work Ethics</h2>
          <p className="text-gray-700 mt-4 text-lg">
          We uphold honesty, transparency, and ethical practices in every aspect of our work, building trust with clients, partners, and employees through consistent and fair actions.
          </p>
        </div>
      </div>

      
    </div>
  );
}

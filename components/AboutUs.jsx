"use client";

import { useState } from "react";

const cards = [
  {
    title: "Who We Are",
    image: "/whoweare.jpg", // Replace with actual image
    description: "We are a team of visionaries, technologists, and problem-solvers dedicated to transforming industries with AI-driven automation."
  },
  {
    title: "What We Do",
    image: "/whatwedo.avif", // Replace with actual image
    description: "We develop cutting-edge AI-driven solutions that enhance decision-making, automate complexity, and unlock new opportunities."
  },
  {
    title: "Why Choose Us?",
    image: "/why.jpg", // Replace with actual image
    description: "We push the boundaries of AI, focusing on innovation, transparency, and human-centric solutions to empower businesses worldwide."
  }
];

export default function AboutUs() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-12 bg-gradient-to-b from-slate-300 to-slate-900 min-h-10">
      {cards.map((card, index) => (
        <FlipCard key={index} title={card.title} image={card.image} description={card.description} />
      ))}
    </div>
  );
}

function FlipCard({ title, image, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[250px] h-[300px] [perspective:1000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl [backface-visibility:hidden]">
          <img src={image} alt={title} className="w-full h-2/3 object-cover rounded-t-xl" />
          <h3 className="text-lg font-bold text-blue-900 mt-3">{title}</h3>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-800 text-white text-center p-4 rounded-xl shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
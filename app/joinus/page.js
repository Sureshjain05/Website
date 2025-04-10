"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("teamspirit");

  const tabs = [
    { id: "teamspirit", label: "Team Spirit", content: "Work alongside passionate professionals who support, uplift, and inspire each other to achieve excellence.", image: "/teamspirit.jpg" },
    { id: "innovation ", label: "Innovation", content: "Join a team that embraces cutting-edge technology, fosters innovation, and encourages creative problem-solving to drive impactful solutions.", image: "/innovate.jpg" },
    { id: "leadership ", label: "Leadership", content: "Develop leadership skills through mentorship, hands-on experience, and real-world problem-solving opportunities.", image: "/leader.avif" },
    { id: "community ", label: "Community", content: "Be part of a company that gives back through social responsibility initiatives, community outreach programs and making a positive impact on society.", image: "/community.jpg" },
  ];
  return (
    <>
      {/* Header Section */}
      <div className="overflow-hidden bg-gradient-to-tl from-purple-900 to-blue-900 h-[300px] sm:h-[325px] w-full relative">
        <div className="py-10 bg-gray-100 opacity-90"></div>
        <div>
          <img src="3r.png" className="w-full h-full object-cover absolute mix-blend-overlay" />
          <div className="flex justify-center py-20">
            <h1 className="text-white text-7xl font-semibold">Careers</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center min-h-screen pt-16 bg-gray-100">
  <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg p-8">
    <div className="text-center">
      <h3 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700">
        To Join Our Team
      </h3>
    </div>
    <div className="mt-6 text-center">
      <p className="text-black-600 text-base sm:text-lg mt-2">
        Become a part of our dynamic team and contribute to exciting projects. We’re always looking for passionate individuals to grow with us!
      </p>
    </div>
    <div className="mt-8 text-center">
      <p className="text-sm sm:text-md text-gray-700 leading-7 sm:leading-8">
        Your next great opportunity starts here – become a part of our team!
      </p>
      <button
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
        onClick={() => router.push("/apply")}
      >
        Apply Now
      </button>
    </div>
  </div>



        {/* Image Gallery */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20">
          <img src="BR8.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 1" />
          <img src="BR3.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 2" />
          <img src="BR4.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 3" />
          <img src="BR10.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 4" />
          <img src="BR6.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 5" />
          <img src="BR7.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 6" />
          <img src="BR9.jpg" className="w-full h-60 object-cover rounded-lg shadow-lg" alt="Office 7" />
          <div 
            className="w-full h-60 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300"
            onClick={() => router.push("/about/life-at-beauroi")}
          >
            <div className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md text-lg font-semibold hover:scale-105">
              Life at Beau Roi &gt;
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 w-full max-w-6xl px-6 sm:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            <div>
              <p className="text-5xl font-bold text-blue-900">2018</p>
              <p className="text-gray-700 text-sm mt-1">FOUNDED</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-900">200+</p>
              <p className="text-gray-700 text-sm mt-1">EMPLOYEES</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-900">200+</p>
              <p className="text-gray-700 text-sm mt-1">CERTIFICATIONS</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-900">4</p>
              <p className="text-gray-700 text-sm mt-1">GLOBAL LOCATIONS</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-blue-900">60+</p>
              <p className="text-gray-700 text-sm mt-1">INTERN TRAINED</p>
            </div>
          </div>
        </div>

        <section className="bg-gray-100 py-12 px-4 md:px-16 w-full">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center">
      <span className="border-l-4 border-gray-800 mr-3 h-8"></span> Why Beau Roi
    </h2>

    {/* Tab Navigation */}
    <div className="mt-6 flex flex-wrap space-x-8 border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`pb-3 text-lg font-medium ${
            activeTab === tab.id ? "text-green-600 border-b-2 border-green-600" : "text-gray-700"
          } hover:text-green-600`}
        >
          {tab.label}
        </button>
      ))}
    </div>

    {/* Content Section */}
    <div className="mt-6 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={tabs.find(tab => tab.id === activeTab)?.image} 
          alt={tabs.find(tab => tab.id === activeTab)?.label} 
          className="w-80 md:w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Dynamic Content */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
        <h3 className="text-2xl font-bold text-blue-900">{tabs.find(tab => tab.id === activeTab)?.label}</h3>
        <p className="mt-3 text-gray-700 text-lg">{tabs.find(tab => tab.id === activeTab)?.content}</p>
      </div>
    </div>
  </div>
</section>



        {/* Empowering Your Journey Section */}
<section className="bg-white py-12 px-4 md:px-16 w-full">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Empowering Your Journey</h2>
  </div>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
    {/* Well-being Section */}
    <div className="flex flex-col items-center">
      <img src="/work.avif" alt="Well-being" className="w-16 h-16" />
      <h3 className="text-xl font-semibold text-gray-900 mt-4">Work Culture</h3>
      <p className="text-gray-700 mt-2">
      Experience a positive and dynamic work environment where collaboration thrives, ideas are valued, and every voice is heard.
      </p>
    </div>

    {/* Flexible Workspaces Section */}
    <div className="flex flex-col items-center">
      <img src="/flexible.png" alt="Flexible Workspaces" className="w-16 h-16" />
      <h3 className="text-xl font-semibold text-gray-900 mt-4">Flexibility </h3>
      <p className="text-gray-700 mt-2">
      Embrace the freedom to work from anywhere! Our globally connected team thrives in remote and hybrid environments, with access to collaborative spaces in key cities, fostering inclusivity and seamless teamwork.
      </p>
    </div>

    {/* Global Community Section */}
    <div className="flex flex-col items-center">
      <img src="/dev.png" alt="Global Community" className="w-16 h-16" />
      <h3 className="text-xl font-semibold text-gray-900 mt-4">Training & Development</h3>
      <p className="text-gray-700 mt-2">
      Upskill with access to workshops, courses, and certifications, along with hands-on projects and expert mentorship to accelerate your professional growth.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/worklife.jpg" alt="Well-being" className="w-16 h-16" />
      <h3 className="text-xl font-semibold text-gray-900 mt-4">Work-Life Balance</h3>
      <p className="text-gray-700 mt-2">
      Work-life balance is key to thriving both professionally and personally. It helps you manage your time effectively, reduce stress, and achieve greater satisfaction in all areas of life.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/collaboration.png" alt="Flexible Workspaces" className="w-16 h-16" />
      <h3 className="text-xl font-semibold text-gray-900 mt-4">Collaboration & Teamwork</h3>
      <p className="text-gray-700 mt-2">
      Focus on the importance of working together, sharing ideas, and supporting one another to achieve common goals."Collaboration is at the heart of our success. We encourage open communication, teamwork, and sharing of ideas to achieve collective goals."
      </p>
    </div>

    <div className="flex flex-col items-center">
      <img src="/wellness.webp" alt="Global Community" className="w-16 h-16" />
      <h3 className="text-xl font-semibold text-gray-900 mt-4">Wellness at Work</h3>
      <p className="text-gray-700 mt-2">
      Wellness at work focuses on creating a healthy and supportive environment for both physical and mental well-being. By prioritizing wellness, we enhance productivity, reduce stress, and foster a positive workplace culture.
      </p>
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default Page;
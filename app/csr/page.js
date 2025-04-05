"use client";
import Details1 from '@/components1/Details';
import Image from 'next/image';

export default function CSR() {
  return (
    <>
    <div className='overflow-hidden bg-gradient-to-tl from-purple-900 to-blue-900 h-[300px] sm:h-[325px] w-full relative'>
        <div className='py-10 bg-gray-100 opacity-90'></div>
        <div>
          <img src="3r.png" className='w-full h-full object-cover absolute mix-blend-overlay' />
          <div className="flex justify-center max-sm:px-0 py-20 sm:py-20">
            <h1 className="text-white max-sm:text-3xl text-7xl font-semibold">
            Corporate Social Responsibility
            </h1>
          </div>
        </div>
      </div>
          

      {/* Blood Bank Donations Section */}
      <Details1
        dcolor={"text-gray-900"}
        dfl={"flex-row-reverse"}
        dbg={"py-20"}
        dsrc={"/blood1.jpg"}
        dtxt={"Blood Donations"}
        dtxtpara={
          "Blood donation is one of the most vital ways to save lives. Donate blood, save lives. Your one donation can be a lifeline for someone in need."
        }
      />

      {/* Plantation Initiatives Section */}
      <Details1
        dcolor={"text-gray-900"}
        dbg={"py-10 pb-20"}
        dsrc={"/plant1.jpg"}
        dtxt={"Plantation"}
        dtxtpara={
          "We are committed to a greener future by promoting plantation drives that help combat deforestation, reduce carbon footprints, and provide cleaner air for everyone."
        }
      />

      {/* Food Donations Section */}
      <Details1
        dcolor={"text-gray-900"}
        dfl={"flex-row-reverse"}
        dbg={"py-20"}
        dsrc={"/Narayanan.jpg"}
        dtxt={"Food Donations"}
        dtxtpara={
          "Our food donation initiative provides nutritious meals to those in need, especially in underserved communities. "
        }
      />

      {/* Charity and Giving Section */}
      <Details1
  dcolor={"text-gray-900"}
  dbg={"py-20 pb-20"}
  style={{ width: '50px', height: 'auto' }} // Adjust image size here
  dsrc={"/Prem.jpg"}
  dtxt={"Charity"}
  dtxtpara={
    "We believe in the power of charity to create meaningful change in the world. By supporting those in need, we can inspire hope and build stronger, more compassionate communities."
  }
/>

    </>
  );
}

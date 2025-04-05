
"use client"
import React, { useEffect, useRef, useState } from "react";


export default function App() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className="px-4 pb-20" >

		<div className=" sm:mx-auto  ">
			<div className="flex max-lg:flex-col pt-32 pb-20 justify-between sm:gap-20">
				<div className="w-[100%] ">

					<div className=" sm:text-[1.6rem] max-sm:mb-[-10px] text-[1.3rem] text-blue-500 text-center font-bold ">
					"Here's A Glimps Of Our Services"
					</div>
					<h1 className="test-gray-900   sm:leading-10  sm:text-[2.1rem] font-extrabold text-[1.8rem] text-center ">
						Empower Business To Leverage Multi-Cloud.
					</h1>
					
				</div>	
			</div>
		</div>
					

      <div>
        <video
          style={{ maxWidth: "100%", width: "1100px", margin: "0 auto" }}
          playsInline
          loop
          muted
          
          alt="All the devices"
          src=".././abt-vid.mp4"
          ref={videoEl}
        />
      </div>
    </div>
  );
}

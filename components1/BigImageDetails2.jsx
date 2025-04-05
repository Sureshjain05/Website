
"use client";
import React, { useEffect, useRef } from "react";


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
    <div className="px-4 pb-20 py-10 sm:py-36" >

<div className=" max-sm:flex-col justify-between sm:gap-20">
				<div className="flex justify-center ">
					<h1 className="test-gray-900  sm:leading-10 py-16 sm:py-4 sm:text-[3.6rem] sm:pb-14 font-extrabold text-[2.2rem]  max-sm:text-center ">
						Across The World
					</h1>
					
				</div>
		
			{/* <div className="sm:flex max-sm:flex-col sm:justify-between">
			<h1 className="max-sm:mt-[-10px] text-gray-900 text-[20px] sm:text-[1.6rem]  max-sm:text-center  sm:leading-10  font-bold">
						 Up & Running:<br/><span className="text-red-500 pb-1 text-md sm:text-xl font-bold"> India, United Kingdom</span><br/><br/></h1>
	        <h1 className="max-sm:mt-[-10px]  text-gray-900  text-[20px] sm:text-[1.6rem]  max-sm:text-center  sm:leading-10  font-bold">In Progress:<br/><span className="text-green-600 pb-1 text-md sm:text-xl font-bold"> Australia, Canada, Netherlands, UAE </span></h1>
			</div>	 */}
		</div>
					

      <div>
        <video
          style={{ maxWidth: "100%", width: "1100px", margin: "0 auto" }}
          playsInline
          loop
          muted
          
          alt="All the devices"
          src=".././map-vid.mp4"
          ref={videoEl}
        />
      </div>
    </div>
  );
}

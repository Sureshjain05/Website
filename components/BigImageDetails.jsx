

const BigImageDetails = ({dsrc}) => {
	return (

		<section className="  flex px-2 sm:px-14 md:px-36 justify-center bg-white py-20 sm:py-36">
		<div className=" sm:mx-auto  ">
			<div className=" max-sm:flex-col justify-between sm:gap-20">
				<div className="flex justify-center ">
					<h1 className="test-gray-900  sm:leading-10 pb-6 sm:text-[3.6rem] sm:pb-14 font-extrabold text-[2.8rem]  max-sm:text-center ">
						Across The World
					</h1>
					
				</div>
		
			<div className="sm:flex max-sm:flex-col sm:justify-between">
			<h1 className="max-sm:mt-[-10px] text-gray-900 text-[20px] sm:text-[1.6rem]  max-sm:text-center  sm:leading-10  font-bold">
						 Up & Running:<br/><span className="text-red-500 pb-1 text-md sm:text-xl font-bold"> India, United Kingdom</span><br/><br/></h1>
	        <h1 className="max-sm:mt-[-10px]  text-gray-900  text-[20px] sm:text-[1.6rem]  max-sm:text-center  sm:leading-10  font-bold">In Progress:<br/><span className="text-green-600 pb-1 text-md sm:text-xl font-bold"> Australia, Canada, Netherlands, UAE </span></h1>
			</div>	
		</div>

		<div className="mt-[-30px] max-sm:mt-[8px]  flex justify-center">
				         <div className="" >
            <img className=" rounded-3xl"  width="1200px" src=".././map-world.jpg"   />
                       </div>
			</div>
			
		</div>
		</section>

	)
}

export default BigImageDetails;
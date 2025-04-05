

const Details = ({dtxt,dtxtpara, dcolor, dfl, dbg, dsrc}) => {
  return (

      
        <div className={`${dbg} max-sm:border-b-[1px]  flex justify-between mx-auto px-2 xm:px-10 sm:px-24 py-8`} >

           
     <section  className={`${dcolor}   py-2  rounded-3xl max-sm:flex-col flex ${dfl} gap-10 items-center justify-between `}>
          <div  className=" sm:w-1/2 ">
            <div className="py-5 flex flex-col items-center justify-center">
                       <div className='mt-1'>
                <div className="  text-yellow-500  font-bold ">
                  
                </div>  
             </div>
            <div className="sm:text-[2.5rem] max-sm:pb-4 max-sm:pt-6 text-[2.3rem] font-bold">
                {`${dtxt}`}
            </div>
            <p className="text-xl text-center leading-8 sm:max-w-md mt-2">
             {`${dtxtpara}`}
            </p>
            </div>
 
             
            {/* <div className='mt-1'> */}
            {/*     <button className="px-4 py-2 text-white  hover:bg-blue-400 rounded-md transition duration-300 bg-indigo-700 "> */}
            {/*       Know More */}
            {/*     </button>   */}
            {/*  </div> */}
          </div>

          <div  className=" sm:w-1/2  max-w-screen-xl flex justify-center items-center ml-2  py-8  text-center lg:py-10 ">
                 
    <div
         
            className="md:w-[75%]"
          >
            <img src={`${dsrc}`} className="rounded-3xl items-center" />
          </div>

      </div>
      
      
          
        </section>




    </div>

  )
}

export default Details

   
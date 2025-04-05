
import Link from 'next/link';

const Details2 = ({sername,serdes,sern,serimg}) => {
	return (
<div className='bg-gray-100'>


<div className='md:p-20 flex items-center justify-center'>


<div  className="flex p-6 pt-10 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-50">
    <img className="object-cover  h-96 w-full md:h-auto md:w-96 md:px-6   rounded-lg"  src={`${serimg}`} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 max-md:pt-4 text-3xl font-bold tracking-tight text-gray-900 ">{sern}</h5>
        <p className="mb-3 font-normal text-gray-700 py-2">{serdes}</p>
     <Link href="/service-form" className='flex justify-start'> <button  className="px-4 text-xs py-2 mr-4 hover:text-black  py-2 text-gray-500 font-semibold border border-gray-800 hover:bg-blue-400 rounded-md transition duration-300 border-gray">
                  Explore More
                </button> </Link>
    </div>
    
</div>
</div>
</div>
	)
}

export default Details2
"use client"
import Map from '@/components/Map';
import Form from '@/components/Form';
import Image from 'next/image'
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function Home() {
  return (
          <>

         
         <TawkMessengerReact
            propertyId="658daa0270c9f2407f841867"
            widgetId="1hiom06vn"/>
            <div className=' overflow-hidden  bg-gradient-to-tl from-purple-900 to-blue-900 h-[300px] sm:h-[325px] w-full relative'>
              <div className='py-10 bg-gray-100 opacity-90'>

              </div>
              <div>
                <img src="3r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/>
                <div className="flex justify-center max-sm:px-0 py-20 sm:py-20">
                  <h1 className="text-white max-sm:text-3xl text-7xl font-semibold">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          <Form/>

  <Map/>
          </>
  )
}

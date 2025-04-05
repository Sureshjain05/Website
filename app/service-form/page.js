"use client"
import Hero from '@/components1/Hero';
import Script from 'next/script';
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

      
<Form/>

          </>
  )
}

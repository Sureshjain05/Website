

import './globals.css'
import Navbar from '@/components/header/index';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'Beauroi',
  description: 'Delivering cutting-edge solutions that empower businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Beauroi</title>
        <meta name="company" content="Beau Roi" />
        <meta name="description" content="At Beauroi, we specialize in delivering cutting-edge solutions that empower businesses to harness the full potential of the digital landscape. Our commitment to innovation and expertise in cloud integration and IT services will take your organization to new heights. The services we provide have also been proven to be highly sought after by our clients and customers so that the customer satisfaction index is almost 100%." />    
        <meta name="url" content="https://beauroi.com" />
        <meta name="twitter:site" content="@Beau_Roi_" />
        <meta property="og:site_name" content="Beau Roi" />
        <meta property="og:url" content="https://linkedin.com/in/beauroi/" />
        <meta property="og:image" content="https://www.beauroi.com/beauroi.png" />
        <meta name="author" content="Saran Venkatesan" />
        <meta property="og:type" content="website" />
  
      </Head>
      
      <body > 
        <Navbar/>

        {/* <MegaMenu/> */}
            <main className="relative orverflow-hidden">{children} </main>
        <Footer />
      </body>
    </html>
  )
}

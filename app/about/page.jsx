import Details1 from '@/components1/Details';
import Newsletter from '@/components/Newsletter';
import BigImageDetails from '@/components1/BigImageDetails2';
import Abt from '@/components/Abt';
import Map from '@/components/Map';
import MajorEnterprise from '@/components/MajorEnterprise';
import TeamMembers from '@/components/TeamMembers';
import Image from 'next/image';
import Numbers from '@/components/Numbers';
import VissionMission from '@/components/vissionmission';
import AboutUs from '@/components/AboutUs';

export default function Home() {
  return (
    <>
<div className="relative overflow-hidden h-[250px] sm:h-[250px] w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center mt-16 sm:mt-20">
  {/* Background Overlay for Depth */}
  <div className="absolute inset-0 bg-opacity-30 backdrop-blur-md"></div>

  {/* Light Glowing Effect */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.1),_transparent)]"></div>

  {/* Left-Side Decorative Element */}
  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-40 h-40 bg-purple-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>

  {/* Right-Side Decorative Element */}
  <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500 opacity-20 rounded-full blur-2xl animate-bounce"></div>

  {/* Title */}
  <div className="relative z-10 text-center">
    <h1 className="text-white max-sm:text-3xl text-7xl font-extrabold tracking-wide drop-shadow-md">
      About <span className="text-white-400">Beau Roi</span>
    </h1>
  </div>
</div>



      <AboutUs/>
      <VissionMission/>
      <Abt />
      <TeamMembers/>
      <Numbers />
      <MajorEnterprise /> 
      <BigImageDetails />
      <Newsletter />
      <Map />
    </>
  );
}


import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full p-4 lg:p-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Logo and Social Media Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
  {/* Beauroi Logo */}
  <a href="https://beauroi.com/" className="mb-4">
    <img src="/beauroi.png" className="h-12 w-auto" alt="Beauroi Logo" />
  </a>

  {/* Social Media Icons - Placed right below the logo */}
  <div className="flex justify-center space-x-4 mt-2">
    <a href="https://www.facebook.com/profile.php?id=61556119875955" className="text-white text-2xl">
      <FaFacebook />
    </a>
    <a href="https://www.twitter.com/Beau_Roi_" className="text-white text-2xl">
      <FaTwitter />
    </a>
    <a href="https://www.linkedin.com/company/beauroi/" className="text-white text-2xl">
      <FaLinkedin />
    </a>
    <a href="https://www.instagram.com/beau_.roi/" className="text-white text-2xl">
      <FaInstagram />
    </a>
    <a href="https://www.youtube.com/@BeauRoi" className="text-white text-2xl">
      <FaYoutube />
    </a>
  </div>

  {/* "Our Presence" Heading */}
  <h3 className="text-white font-semibold mt-6 text-lg">Our Presence</h3>

  {/* Country Presence Flags - Positioned below the heading */}
  <div className="flex justify-center space-x-4 mt-2">
    <img src="https://flagcdn.com/48x36/sg.png" alt="Singapore" className="w-8 h-6" />
    <img src="https://flagcdn.com/w40/gb.png" alt="UK" className="w-8 h-6" />
    <img src="https://flagcdn.com/48x36/za.png" alt="South Africa" className="w-8 h-6" />
    <img src="https://flagcdn.com/w40/in.png" alt="India" className="w-8 h-6" />
  </div>
</div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <div>
              <h2 className="text-sm font-semibold text-white uppercase mb-4">Partners</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/partner/cloud" className="hover:underline">Google</a>
                </li>
                <li className="mb-4">
                  <a href="/about/life-at-beauroi" className="hover:underline">Azure</a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">AWS</a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">MongoDB</a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">Data Bricks</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white uppercase mb-4">Services</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/services/data-and-analytics" className="hover:underline">Data & Analytics</a>
                </li>
                <li className="mb-4">
                  <a href="/services/multicloud-computing" className="hover:underline">Multicloud Computing</a>
                </li>
                <li className="mb-4">
                  <a href="/services/application-development" className="hover:underline">App Development</a>
                </li>
                <li className="mb-4">
                  <a href="/services/strategic-it-consultation" className="hover:underline">IT Consultation</a>
                </li>
                <li className="mb-4">
                  <a href="/services/augmental-ai" className="hover:underline">AI/ML</a>
                </li>
                <li>
                  <a href="/services/24-7" className="hover:underline">24/7</a>
                </li>
              </ul>

            </div>
            <div>
              <h2 className="text-sm font-semibold text-white uppercase mb-4">Resources</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/casestudies" className="hover:underline">Case Studies</a>
                </li>
                <li>
                  <a href="/csr" className="hover:underline">CSR</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white uppercase mb-4">Company</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">About Us</a>
                </li>
                <li>
                  <a href="" className="hover:underline">Careers</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between text-center sm:text-left text-gray-400 text-sm">
          <span>© 2025 <a href="https://beauroi.com/" className="hover:underline">Beau Roi™</a>. All Rights Reserved.</span>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 mt-2 sm:mt-0">
            <a href="/" className="hover:underline">Terms & Conditions</a>
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

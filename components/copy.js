import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full">
      <div className="mx-auto w-full max-w-full-xl p-4 py-4 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-left flex-col">
  {/* Company Logo */}
  <a href="https://beauroi.com/" className="flex items-left mb-8">
    <img
      src="/beauroi.png"
      className="h-8 me-3"
      style={{ height: "50px", width: "auto" }}
      alt="Logo"
    />
  </a>

  {/* Social Media Icons */}
  <div className="flex gap-4">
<a className="hover:scale-110" target="_blank" href="https://www.facebook.com/profile.php?id=61556119875955">
  <svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 18C0 27.9411 8.05888 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05888 27.9411 0 18 0C8.05888 0 0 8.05888 0 18Z" fill="#1877F2"></path><path d="M27 18C27 13.05 22.95 9 18 9C13.05 9 9 13.05 9 18C9 22.5 12.2625 26.2125 16.5375 26.8875V20.5875H14.2875V18H16.5375V15.975C16.5375 13.725 17.8875 12.4875 19.9125 12.4875C20.925 12.4875 21.9375 12.7125 21.9375 12.7125V14.9625H20.8125C19.6875 14.9625 19.35 15.6375 19.35 16.3125V18H21.825L21.375 20.5875H19.2375V27C23.7375 26.325 27 22.5 27 18Z" fill="white"></path></svg>
  </a>
  <a className="hover:scale-110" target="_blank" href="https://www.linkedin.com/company/beauroi/
">
<svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#0A66C2"></rect><g clipPath="url(#clip0_5292_13304)"><path d="M7.5 10.3018C7.5 9.62609 7.73649 9.06866 8.20946 8.62949C8.68243 8.19029 9.2973 7.9707 10.0541 7.9707C10.7973 7.9707 11.3986 8.18691 11.8581 8.61935C12.3311 9.0653 12.5676 9.64637 12.5676 10.3626C12.5676 11.0112 12.3378 11.5518 11.8784 11.9842C11.4054 12.4302 10.7838 12.6531 10.0135 12.6531H9.99324C9.24999 12.6531 8.64866 12.4302 8.18919 11.9842C7.72972 11.5383 7.5 10.9775 7.5 10.3018ZM7.76351 28.0383V14.4977H12.2635V28.0383H7.76351ZM14.7568 28.0383H19.2568V20.4775C19.2568 20.0045 19.3108 19.6396 19.4189 19.3829C19.6081 18.9234 19.8953 18.5349 20.2804 18.2173C20.6655 17.8998 21.1486 17.741 21.7297 17.741C23.2432 17.741 24 18.7612 24 20.8018V28.0383H28.5V20.2748C28.5 18.2747 28.027 16.7579 27.0811 15.7241C26.1351 14.6903 24.8851 14.1734 23.3311 14.1734C21.5878 14.1734 20.2297 14.9234 19.2568 16.4234V16.4639H19.2365L19.2568 16.4234V14.4977H14.7568C14.7838 14.9302 14.7973 16.2747 14.7973 18.5315C14.7973 20.7883 14.7838 23.9572 14.7568 28.0383Z" fill="white"></path></g><defs><clipPath id="clip0_5292_13304"><rect x="7.5" y="7.5" width="21" height="21" fill="white"></rect></clipPath></defs></svg>
  </a>
  <a className="hover:scale-110" target="_blank" href="https://www.instagram.com/beau_.roi/">
<svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.12866 35.8727C6.98773 35.7753 5.82471 35.419 5.05115 35.1173C4.02615 34.7182 3.29539 34.2432 2.52611 33.475C1.75683 32.7067 1.28071 31.976 0.883764 30.951C0.582043 30.1774 0.225756 29.0144 0.128392 26.8735C0.0213986 24.5592 0 23.8648 0 18.0016C0 12.1384 0.0235385 11.4451 0.127322 9.12866C0.224686 6.98773 0.583113 5.82685 0.882694 5.05115C1.28178 4.02615 1.7579 3.29539 2.52504 2.52504C3.29325 1.75683 4.02401 1.27964 5.05008 0.882694C5.82364 0.580973 6.98666 0.224686 9.12759 0.127322C11.4429 0.0213986 12.1384 0 17.9995 0C23.8627 0 24.556 0.0235385 26.8724 0.127322C29.0133 0.224686 30.1742 0.583113 30.9499 0.882694C31.9749 1.27964 32.7057 1.75683 33.475 2.52504C34.2442 3.29325 34.7182 4.02508 35.1173 5.05008C35.419 5.82364 35.7753 6.98666 35.8727 9.12759C35.9786 11.444 36 12.1373 36 18.0005C36 23.8616 35.9786 24.5571 35.8727 26.8735C35.7753 29.0144 35.4169 30.1774 35.1173 30.951C34.7182 31.976 34.2432 32.7067 33.475 33.475C32.7067 34.2432 31.9749 34.7182 30.9499 35.1173C30.1764 35.419 29.0133 35.7753 26.8724 35.8727C24.5581 35.9786 23.8627 36 17.9995 36C12.1384 36 11.4429 35.9797 9.12866 35.8727Z" fill="url(#paint0_radial_5292_13308)"></path><path d="M14.2509 18C14.2509 15.929 15.9294 14.2497 18.0005 14.2497C20.0715 14.2497 21.7509 15.929 21.7509 18C21.7509 20.071 20.0715 21.7503 18.0005 21.7503C15.9294 21.7503 14.2509 20.071 14.2509 18ZM12.2235 18C12.2235 21.1905 14.8098 23.7767 18.0005 23.7767C21.1911 23.7767 23.7774 21.1905 23.7774 18C23.7774 14.8095 21.1911 12.2233 18.0005 12.2233C14.8098 12.2233 12.2236 14.8093 12.2236 18M22.6562 11.9942C22.656 12.2612 22.7351 12.5223 22.8834 12.7443C23.0316 12.9664 23.2424 13.1395 23.4891 13.2418C23.7357 13.3441 24.0072 13.3709 24.2691 13.3189C24.531 13.2669 24.7716 13.1385 24.9605 12.9497C25.1493 12.761 25.278 12.5205 25.3302 12.2587C25.3824 11.9968 25.3558 11.7253 25.2537 11.4786C25.1516 11.2319 24.9787 11.021 24.7567 10.8726C24.5348 10.7241 24.2738 10.6449 24.0068 10.6448H24.0062C23.6483 10.6449 23.3051 10.7871 23.052 11.0401C22.7988 11.2932 22.6565 11.6363 22.6562 11.9942ZM13.4553 27.1573C12.3584 27.1074 11.7622 26.9247 11.366 26.7703C10.8408 26.5658 10.466 26.3223 10.0719 25.9288C9.67791 25.5353 9.434 25.1609 9.23041 24.6357C9.07596 24.2397 8.89326 23.6434 8.84339 22.5465C8.78885 21.3607 8.77796 21.0045 8.77796 18.0002C8.77796 14.9959 8.78975 14.6407 8.84339 13.4538C8.89335 12.357 9.0774 11.7618 9.23041 11.3647C9.4349 10.8394 9.67845 10.4647 10.0719 10.0706C10.4654 9.67662 10.8399 9.43272 11.366 9.22914C11.762 9.0747 12.3584 8.892 13.4553 8.84214C14.6412 8.7876 14.9974 8.77671 18.0005 8.77671C21.0035 8.77671 21.3601 8.78832 22.547 8.84232C23.6439 8.89227 24.239 9.07632 24.6362 9.22932C25.1615 9.4329 25.5363 9.67734 25.9303 10.0708C26.3243 10.4643 26.5674 10.8396 26.7718 11.3648C26.9263 11.7608 27.109 12.3572 27.1589 13.454C27.2134 14.6408 27.2243 14.9961 27.2243 18.0004C27.2243 21.0047 27.2134 21.3599 27.1589 22.5467C27.1089 23.6435 26.9253 24.2397 26.7718 24.6359C26.5674 25.1611 26.3238 25.5359 25.9303 25.929C25.5368 26.3221 25.1615 26.566 24.6362 26.7705C24.2402 26.9249 23.6439 27.1076 22.547 27.1575C21.3611 27.212 21.0049 27.2229 18.0005 27.2229C14.996 27.2229 14.6408 27.212 13.4553 27.1575M13.3621 6.81813C12.1644 6.87267 11.346 7.06257 10.6313 7.34067C9.89158 7.62786 9.26452 8.01315 8.63837 8.63829C8.01221 9.26343 7.6279 9.89055 7.34069 10.6312C7.06258 11.3463 6.87267 12.1642 6.81813 13.3618C6.76269 14.5614 6.75 14.9449 6.75 18C6.75 21.0551 6.76269 21.4386 6.81813 22.6382C6.87267 23.8359 7.06258 24.6537 7.34069 25.3688C7.6279 26.1085 8.0123 26.7368 8.63837 27.3617C9.26443 27.9866 9.89068 28.3713 10.6313 28.6593C11.3474 28.9374 12.1644 29.1273 13.3621 29.1819C14.5623 29.2364 14.9452 29.25 18.0005 29.25C21.0557 29.25 21.4392 29.2373 22.6388 29.1819C23.8366 29.1273 24.6544 28.9374 25.3696 28.6593C26.1093 28.3713 26.7364 27.9868 27.3625 27.3617C27.9887 26.7366 28.3722 26.1085 28.6602 25.3688C28.9383 24.6537 29.1291 23.8358 29.1828 22.6382C29.2373 21.4377 29.25 21.0551 29.25 18C29.25 14.9449 29.2373 14.5614 29.1828 13.3618C29.1282 12.1641 28.9383 11.3458 28.6602 10.6312C28.3722 9.89145 27.9877 9.26442 27.3625 8.63829C26.7374 8.01216 26.1093 7.62786 25.3705 7.34067C24.6544 7.06257 23.8365 6.87177 22.6397 6.81813C21.4399 6.76332 21.0566 6.75 18.0018 6.75C14.947 6.75 14.5628 6.76269 13.3626 6.81813" fill="white"></path><defs><radialGradient id="paint0_radial_5292_13308" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(2.32988 35.2114) scale(45.7066)"><stop offset="0.09" stopColor="#FA8F21"></stop><stop offset="0.78" stopColor="#D82D7E"></stop></radialGradient></defs></svg>
  </a>
  <a className="hover:scale-110"  href="https://www.twitter.com/Beau_Roi_">
  <svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#1D9BF0"></rect><path d="M14.7053 27.4947C22.6883 27.4947 27.0533 20.8797 27.0533 15.1467C27.0533 14.9577 27.0533 14.7687 27.0443 14.5887C27.8903 13.9767 28.6283 13.2117 29.2133 12.3387C28.4393 12.6807 27.6023 12.9147 26.7203 13.0227C27.6203 12.4827 28.3043 11.6367 28.6283 10.6197C27.7913 11.1147 26.8643 11.4747 25.8743 11.6727C25.0823 10.8267 23.9573 10.3047 22.7063 10.3047C20.3123 10.3047 18.3683 12.2487 18.3683 14.6427C18.3683 14.9847 18.4043 15.3177 18.4853 15.6327C14.8763 15.4527 11.6813 13.7247 9.53927 11.0967C9.17027 11.7357 8.95427 12.4827 8.95427 13.2747C8.95427 14.7777 9.71927 16.1097 10.8893 16.8837C10.1783 16.8657 9.51227 16.6677 8.92727 16.3437C8.92727 16.3617 8.92727 16.3797 8.92727 16.3977C8.92727 18.5037 10.4213 20.2497 12.4103 20.6547C12.0503 20.7537 11.6633 20.8077 11.2673 20.8077C10.9883 20.8077 10.7183 20.7807 10.4483 20.7267C10.9973 22.4547 12.5993 23.7057 14.4983 23.7417C13.0133 24.9027 11.1413 25.5957 9.10727 25.5957C8.75627 25.5957 8.41427 25.5777 8.07227 25.5327C9.97127 26.7747 12.2573 27.4947 14.7053 27.4947Z" fill="white"></path></svg>
   
    
  </a>
  <a
    className="hover:scale-110"
    target="_blank"
    href="https://www.youtube.com/@BeauRoi"
  >
  <svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#FF0000"></rect><path d="M28.4824 12.8471C28.2353 11.9294 27.5118 11.2059 26.5941 10.9588C24.9176 10.5 18.2118 10.5 18.2118 10.5C18.2118 10.5 11.5059 10.5 9.82941 10.9412C8.92941 11.1882 8.18824 11.9294 7.94118 12.8471C7.5 14.5235 7.5 18 7.5 18C7.5 18 7.5 21.4941 7.94118 23.1529C8.18824 24.0706 8.91176 24.7941 9.82941 25.0412C11.5235 25.5 18.2118 25.5 18.2118 25.5C18.2118 25.5 24.9176 25.5 26.5941 25.0588C27.5118 24.8118 28.2353 24.0882 28.4824 23.1706C28.9235 21.4941 28.9235 18.0176 28.9235 18.0176C28.9235 18.0176 28.9412 14.5235 28.4824 12.8471Z" fill="white"></path><path d="M16.0762 20.9531C16.0762 21.0685 16.201 21.1407 16.301 21.0831L21.427 18.1308C21.5271 18.0731 21.5271 17.9285 21.427 17.8708L16.301 14.9186C16.201 14.861 16.0762 14.9332 16.0762 15.0486V20.9531Z" fill="#FF0000"></path></svg>  
  </a>
  </div>
</div>


          {/* Content Section */}
          <div className="flex flex-wrap justify-center gap-12 sm:gap-8">
            {/* Partners Section */}
            <div className="text-left w-48">
              <h2 className="text-sm font-semibold uppercase text-white mb-4">Partners</h2>
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

            {/* Services Section */}
            <div className="text-left w-48">
              <h2 className="text-sm font-semibold uppercase text-white mb-4">Services</h2>
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

            {/* Further Details Section */}
            <div className="text-left w-48">
              <h2 className="text-sm font-semibold uppercase text-white mb-4">Resources</h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/casestudies" className="hover:underline">Case Studies</a>
                </li>
                <li>
                  <a href="/csr" className="hover:underline">CSR</a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="text-left w-48">
              <h2 className="text-sm font-semibold uppercase text-white mb-4">Company</h2>
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
        <hr className="my-8 w-full border-gray-700 lg:my-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
  {/* Left side: Copyright */}
  <span className="text-sm sm:text-center text-gray-400">
    © 2025{" "}
    <a href="https://beauroi.com/" className="hover:underline">
      Beau Roi™
    </a>
    . All Rights Reserved.
  </span>

  {/* Right side: Terms and Conditions, Privacy Policy */}
  <div className="flex space-x-4 text-sm text-gray-400">
    <a href="/" className="hover:underline">
      Terms and Conditions
    </a>
    <a href="/" className="hover:underline">
      Privacy Policy
    </a>
    <a href="/" className="hover:underline">
      Cookie Policy
    </a>
  </div>
</div>

  </div>
</footer>
  );
};

export default Footer;

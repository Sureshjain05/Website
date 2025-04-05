"use client";
import Script from 'next/script';

const Page = () => {
  return (
    <>
                <div className=' overflow-hidden   bg-gradient-to-tl from-purple-900 to-blue-900 h-[300px] sm:h-[325px] w-full relative'>
              <div className='py-10 bg-gray-100 opacity-90'>

              </div>
              <div>
                <img src="3r.png" className='w-full h-full object-cover absolute mix-blend-overlay'/>
                <div className="flex justify-center max-sm:px-0 py-20 sm:py-20">
                  <h1 className="text-white max-sm:text-3xl text-7xl font-semibold">
                    Join Us
                  </h1>
                </div>
              </div>
            </div>
    <div className="py-8 sm:py-14">
      <div className="pt-8 pb-20 flex justify-center item-center">
        <h3 className="mb-2 max-sm:text-center text-5xl font-semibold text-gray-700">
          To Join Our Team
        </h3>
      </div>

      <div className="flex justify-center items-center sm:mx-20 shadow-2xl shadow-gray-300">
        <div className="max-sm:hidden formimg bg-gradient-to-tl from-purple-900 to-blue-900 max-md:h-[830px] h-[744px] w-[80%] relative">
          <div>
            <img src="/join.jpeg" className="w-full h-full object-cover absolute mix-blend-overlay" />
            <div className="flex-col justify-center items-center max-sm:px-0 pt-[58vh] px-16">
              <h1 className="font-bold text-white py-4 uppercase text-4xl">
                To Join Our Team
              </h1>
              <h1 className="text-gray-100 w-[90%] max-sm:text-lg text-lg ">
                Become a part of our dynamic team and contribute to exciting projects. We’re always looking for passionate individuals to grow with us!
              </h1>
            </div>
          </div>
        </div>
        <div className="container border-[1px] border-gray-100 md:px-20 bg-white">
          <div className="px-4 lg:px-2">
            <div className="w-full p-8 my-4 md:px-12 bg-white">
              <p className="mb-16 pt-3 leading-8 md:max-w-2xl text-md text-gray-700">
                <br />
                <span className="text-3xl sm:text-xl lg:text-3xl">
                  Your next great opportunity starts here – become a part of our team!
                </span>
              </p>
              <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              Drop your mail to: <a href="mailto:info@beauroi.com" className="text-blue-500">info@beauroi.com</a>
            </p>
          </div>
              <form action="https://api.web3forms.com/submit" method="POST" encType="multipart/form-data">
                <input
                  type="hidden"
                  name="access_key"
                  value="f3745c6d-5003-4bba-891f-e738d122b42a"
                />
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:border-rose-600"
                    type="text"
                    placeholder="First Name*"
                    name="name"
                    required=""
                  />
                  <input
                    className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:border-rose-600"
                    type="text"
                    placeholder="Last Name*"
                    name="lname"
                    required=""
                  />
                  <input
                    className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:border-rose-600"
                    type="email"
                    placeholder="Email*"
                    name="email"
                    required=""
                  />
                  <input
                    className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:border-rose-600"
                    type="number"
                    placeholder="Phone*"
                    name="ph"
                    required=""
                  />

                  <input
                    className="peer h-10 w-full border-b-[1px] border-gray-400 text-gray-900 focus:outline-none focus:border-rose-600"
                    type="text"
                    placeholder="Role you are applying*"
                    name="Role"
                    required=""
                  />  
                </div>
                
                {/* Replacing the message field with a file upload for resume */}
                {/* <div className="my-4">
                <label htmlFor="resume" className="block text-gray-900 text-sm font-medium mb-2">
                 Attach your resume*
                </label>
                <input
                        type="file"
                        id="resume"
                        className="peer w-[100%] border-[1px] border-gray-400 text-gray-900 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
                        name="resume"
                        accept=".pdf, .jpg, .jpeg, .doc, .docx"  // Restricting file types to PDF, JPG, DOC, and DOCX
                        required=""
                />
                </div> */}

                <div className="my-2 mt-[-20px]">
                  <div className="bdy">
                    <button className="arrr" type="submit">
                      <span className="text-sm flex items-center">Submit</span>
                      <div className="liquid"></div>
                    </button>
                  </div>
                </div>
              </form>
              <Script src="https://web3forms.com/client/script.js" async defer></Script>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;


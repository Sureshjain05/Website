const Map = () => {
  return (
    <div>
      <section className="bg-gray-800 sm:border-y-[0.5px] border-gray-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 py-20 lg:px-8">
          <div className="max-w-xl lg:max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-100">
              Visit Our Location
            </h2>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="sm:flex sm:justify-between gap-8">
              <div className="sm:w-[48%]">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4950.327524630733!2d-0.399989!3d51.656838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1843dd73d%3A0x2f60ed82acd508af!2sWilmington%20Cl%2C%20Watford%2C%20UK!5e0!3m2!1sen!2sin!4v1709124435627!5m2!1sen!2sin"
                    width="100%"
                    height={380}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="sm:w-[48%]">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.208099958293!2d80.22453876055152!3d12.910630532360768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x621d2f554958a7ed%3A0x3731d0b11bae4075!2sBeau%20Roi%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739344568248!5m2!1sen!2sin"
                    width="100%"
                    height={380}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 sm:flex sm:justify-between gap-6">
              <div className="sm:w-[48%] mx-auto text-left">
                <p className="mt-1 text-xl font-bold text-gray-200">
                  United Kingdom
                </p>
                <div className="border-t border-gray-200 my-4 w-15 mx-auto"></div> {/* Narrowed line */}
                <div className="px-6 py-4 text-left mx-auto max-w-xl">
                  <p className="mt-1 text-md text-gray-200">111 Wilmington Close,  </p>
                  <p className="mt-1 text-md text-gray-200"> Watford WD18 0FQ, UK </p>
                  <p className="mt-1 text-md text-gray-200">
                    Phone: +91-9003131497 / +91-7305655399 / +44 7424247206
                  </p>
                </div>
              </div>

              <div className="sm:w-[48%] mx-auto text-left">
                <p className="mt-1 text-xl font-bold text-gray-200">
                  India
                </p>
                <div className="border-t border-gray-200 my-4 mx-auto"></div> {/* Narrowed line */}
                <div className="px-6 py-4 text-left mx-auto max-w-xl">
                  <p className="mt-1 text-md text-gray-200">
                    Beau Roi Technologies Private Limited,
                  </p>
                  <p className="mt-1 text-md text-gray-200">
                    M124, Cactus Corporate Coworking,
                  </p>
                  <p className="mt-1 text-md text-gray-200">
                    #173, 7th Floor, Block B, TECCI Park,
                  </p>
                  <p className="mt-1 text-md text-gray-200">
                    Old Mahabalipuram Road (OMR), Elcot Sez,
                  </p>
                  <p className="mt-1 text-md text-gray-200">
                    Sholinganallur, Chennai - 600 119
                  </p>
                  <p className="mt-1 text-md text-gray-200">Tamilnadu, India</p>
                  <p className="mt-1 text-md text-gray-200">
                    Phone: +91-9003131497 / +91-7305655399 / +44 7424247206
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;




// const Map = () => {
//   return (
//     <div>
//       <section className="bg-gray-800 sm:border-y-[0.5px] border-gray-200">
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 py-20 lg:px-8">
//           <div className="max-w-xl lg:max-w-xl mx-auto text-center">
//             <h2 className="text-3xl font-extrabold text-gray-100">
//               Visit Our Location
//             </h2>
//             {/* <p className="mt-4 text-lg text-gray-100">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p> */}
//           </div>
//           <div className="mt-16 lg:mt-20">
//             <div className="sm:flex sm:justify-between gap-8">
//               <div className="sm:w-[48%]">
//                 <div className="rounded-lg overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4950.327524630733!2d-0.399989!3d51.656838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1843dd73d%3A0x2f60ed82acd508af!2sWilmington%20Cl%2C%20Watford%2C%20UK!5e0!3m2!1sen!2sin!4v1709124435627!5m2!1sen!2sin"
//                     width="100%"
//                     height={380}
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//               <div className="sm:w-[48%]">
//                 <div className="rounded-lg overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.208099958293!2d80.22453876055152!3d12.910630532360768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x621d2f554958a7ed%3A0x3731d0b11bae4075!2sBeau%20Roi%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1739344568248!5m2!1sen!2sin"
//                     width="100%"
//                     height={380}
//                     style={{ border: 0 }}
//                     allowFullScreen=""
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 sm:flex sm:justify-between gap-6">
//               <div className="sm:w-[48%]">
//                 <p className="mt-1 text-xl font-bold text-gray-200">
//                   United Kingdom
//                 </p>
//                 <div className="border-t border-gray-200 my-4"></div> {/* Line with gap */}
//                 <div className="px-6 py-4 text-left">
//                   <p className="mt-1 text-md text-gray-200">111 Wilmington Close,  </p>
//                     <p className="mt-1 text-md text-gray-200"> Watford WD18 0FQ, UK </p>
//                   <p className="mt-1 text-md text-gray-200">
//                     Phone: +91-9003131497 / +91-7305655399 / +44 7424247206
//                   </p>
//                 </div>
//               </div>

//               <div className="sm:w-[48%]">
//                 <p className="mt-1 text-xl font-bold text-gray-200 ">
//                   India
//                 </p>
//                 <div className="border-t border-gray-200 my-4"></div> {/* Line with gap */}
//                 <div className="px-6 py-4 text-left">
//                   <p className="mt-1 text-md text-gray-200">
//                     Beau Roi Technologies Private Limited,
//                   </p>
//                   <p className="mt-1 text-md text-gray-200">
//                     M124, Cactus Corporate Coworking,
//                   </p>
//                   <p className="mt-1 text-md text-gray-200">
//                     #173, 7th Floor, Block B, TECCI Park,
//                   </p>
//                   <p className="mt-1 text-md text-gray-200">
//                     Old Mahabalipuram Road (OMR), Elcot Sez,
//                   </p>
//                   <p className="mt-1 text-md text-gray-200">
//                     Sholinganallur, Chennai - 600 119
//                   </p>
//                   <p className="mt-1 text-md text-gray-200">Tamilnadu, India</p>
//                   <p className="mt-1 text-md text-gray-200">
//                     Phone: +91-9003131497 / +91-7305655399 / +44 7424247206
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Map;







// const Map = () => {
// 	return (
// 		<div>
// <section className="bg-gray-800 sm:border-y-[0.5px] border-gray-200">
//   <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 py-20 lg:px-8">
//     <div className="max-w-xl lg:max-w-xl mx-auto text-center">
//       <h2 className="text-3xl font-extrabold text-gray-100">
//         Visit Our Location
//       </h2>
//       {/* <p className="mt-4 text-lg text-gray-100">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p> */}
//     </div>
//     <div className="mt-16 lg:mt-20">
//       <div className="sm:flex flex-col  gap-8">
//         <div className="rounded-lg overflow-hidden">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4950.327524630733!2d-0.399989!3d51.656838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1843dd73d%3A0x2f60ed82acd508af!2sWilmington%20Cl%2C%20Watford%2C%20UK!5e0!3m2!1sen!2sin!4v1709124435627!5m2!1sen!2sin"
//             width="50%"
//             height={380}
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           />

//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4950.327524630733!2d-0.399989!3d51.656838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766ac1843dd73d%3A0x2f60ed82acd508af!2sWilmington%20Cl%2C%20Watford%2C%20UK!5e0!3m2!1sen!2sin!4v1709124435627!5m2!1sen!2sin"
//             width="50%"
//             height={380}
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//           />

//         </div>
//         <div>
//           <div className="sm:max-w-[2200px] max-sm:py-8 max-sm:border-b-2 mx-auto rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               {/* <h3 className="text-lg font-medium text-gray-100">Our Address</h3> */}
//               <p className="mt-1 text-xl font-bold text-gray-200">
//                 United Kingdom
//               </p>
//             </div>
//             {/* <div className="border-t border-gray-200 px-6 py-4">
//               <h3 className="text-lg font-medium text-gray-100">Hours</h3>
//               <p className="mt-1 text-gray-200">Monday - Friday: 9am - 5pm</p>
//               <p className="mt-1 text-gray-200">Saturday: 10am - 4pm</p>
//               <p className="mt-1 text-gray-200">Sunday: Closed</p>
//             </div> */}

//             <div className="border-t border-gray-200 px-6 py-4">
//               <h3 className="text-md font-bold text-gray-100">Contact</h3>
//               <h3 className="mt-1 text-gray-200">111 Wilmington Close, Watford WD18 0FQ, UK</h3>
//               <p className="mt-1 text-gray-200">Phone: +91-9003131497 / +91-7305655399 / +44 7424247206</p>
//             </div>

//             <div className="border-t border-gray-200 px-6 py-4">
//               <h3 className="text-md font-bold text-gray-100">Contact</h3>
//               <h3 className="mt-1 text-gray-200">111 Wilmington Close, Watford WD18 0FQ, UK</h3>
//               <p className="mt-1 text-gray-200">Phone: +91-9003131497 / +91-7305655399 / +44 7424247206</p>
//             </div>

//           </div>
//         </div>
//         {/* <div>
//           <div className="max-w-[2200px] max-sm:py-8 max-sm:border-b-2 mx-auto rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               <h3 className="text-lg font-medium text-gray-100">Our Address</h3>
//               <p className="mt-1 text-xl font-bold text-gray-200">
//                 India
//               </p>
//             </div>
//             <div className="border-t  border-gray-200 px-6 py-4">
//               <h3 className="text-lg font-medium text-gray-100">Hours</h3>
//               <p className="mt-1 text-gray-200">Monday - Friday: 9am - 5pm</p>
//               <p className="mt-1 text-gray-200">Saturday: 10am - 4pm</p>
//               <p className="mt-1 text-gray-200">Sunday: Closed</p>
//             </div>
//             <div className="border-t  border-gray-200 px-6 py-4">
//               <h3 className="text-lg font-medium text-gray-100">Contact</h3>
//               <p className="mt-1 text-gray-200">Email: info@example.com</p>
//               <p className="mt-1 text-gray-200">Phone: +1 23494 34993</p>
//             </div>
//           </div>
//         </div>

        
        
//         */}

//       </div>
//     </div>
//   </div>
// </section>

// 		</div>
// 	)
// }

// export default Map
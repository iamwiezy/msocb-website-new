import { Link } from "gatsby"
import React from "react"
import "./fonts.css"
import Notification1 from "../images/notification-1.jpg"
import Notification2 from "../images/notification-2.jpg"
import Notification3 from "../images/notification-3.jpg"

const About_msocb = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
      {/* Left Side: Images */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center gap-6">
        {/* Large Circular Image */}
        <div className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={Notification1}
            alt="Farming"
            className="w-full h-full object-cover"
          />
          {/* Hover Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white font-semibold">Organic Farming</p>
          </div>
        </div>

        {/* Stacked Small Circular Images */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={Notification2}
              alt="Organic Farming"
              className="w-full h-full object-cover"
            />
            {/* Hover Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-semibold text-center">
                Farming
              </p>
            </div>
          </div>

          <div className="relative group w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={Notification3}
              alt="Fresh Produce"
              className="w-full h-full object-cover"
            />
            {/* Hover Text */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-semibold text-center">
                Fresh Produce
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <p className="text-yellow-600 font-semibold">Our Introductions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Meghalaya State Organic Certification Body
        </h2>
        <p className="text-green-600  mt-6 text-[16px] font-bold">
          Accredited as certification body for NPOP third party certification
          under Agricultural and Processed Food Products Export Development
          Authority (APEDA)
        </p>
        <p className="text-gray-700 mt-4 text-[14px]">
          MSOCB ensures organic certification, maintaining authenticity and
          quality, while supporting farmers in sustainable agriculture across
          Meghalaya and beyond.
        </p>

        {/* Bullet Points */}
        {/* <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-2xl">🌱</span>
            <p className="font-semibold">Supporting Farmers & Sustainability</p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl">🌿</span>
            <p className="font-semibold">Expanding Organic Growth</p>
          </div>
        </div> */}

        {/* Additional Details */}
        <ul className="mt-6 text-gray-700">
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✅</span>
            <p>NPOP Compliant & APEDA Accredited</p>
          </li>
          <li className="flex items-center space-x-2">
            <span className="text-green-500">✅</span>
            <p>Ensuring Organic Integrity</p>
          </li>
        </ul>

        {/* Discover More Button */}
        <button className="mt-6 px-6 py-3 bg-green-600 text-white hover:bg-white/80 text-white-600 hover:text-green-600 rounded-full font-semibold shadow-md  transition duration-300">
          <Link
            to="/about_section"
            className="text-white hover:text-green-600 no-underline"
          >
            Discover More
          </Link>
        </button>
      </div>
    </section>
  )
}

export default About_msocb

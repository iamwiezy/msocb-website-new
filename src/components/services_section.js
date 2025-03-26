import React from "react"
import { GiWheat, GiSunflower, GiSprout } from "react-icons/gi"
import "./fonts.css"
import { Link } from "gatsby"
import Notification1 from "../images/notification-1.jpg"
import Notification2 from "../images/notification-2.jpg"
import Notification3 from "../images/notification-3.jpg"

const Services_section = () => {
  return (
    <div className="bg-[#f9f6ec] py-12 text-center">
      {/* Section Header */}
      <h3 className="text-green-500 uppercase text-sm font-medium ">
        Our Services
      </h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-2 uppercase">
        What We Offer
      </h2>

      {/* Featured Card */}
      <div className="flex justify-center mt-8">
        <div className="relative w-[340px] md:w-[400px] bg-yellow-400 rounded-xl overflow-hidden shadow-lg flex flex-col items-center p-6">
          {/* Image at Top-Center */}
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-md ">
            <img
              src="https://images.pexels.com/photos/10079693/pexels-photo-10079693.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Organic crop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text & Button Below */}
          <div className="text-center mt-4">
            <p className="text-white font-semibold text-sm">100% ORGANIC</p>
            <h3 className="text-white text-xl font-bold mt-1">
              Organic crop production
            </h3>
            <Link to="/services_page">
              <button className="mt-4 bg-white text-black px-4 py-2 text-sm font-medium rounded-lg">
                Read More{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {/* Card 1 */}
        <Link to="/service-1">
          <div className="relative w-full max-w-[280px] mx-auto">
            <img
              src="https://images.pexels.com/photos/4433935/pexels-photo-4433935.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Individual"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg flex flex-col items-center shadow-md text-center">
              <GiWheat size={20} />
              <p className="text-sm font-semibold mt-1">Individual</p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/service-2">
          <div className="relative w-full max-w-[280px] mx-auto">
            <img
              src="https://images.pexels.com/photos/4433935/pexels-photo-4433935.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Grower Group"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg flex flex-col items-center shadow-md">
              <GiSunflower size={20} />
              <p className="text-sm font-semibold mt-1">Grower Group</p>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/service-3">
          <div className="relative w-full max-w-[280px] mx-auto">
            <img
              src="https://images.pexels.com/photos/10079693/pexels-photo-10079693.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Wild Collection"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg flex flex-col items-center shadow-md">
              <GiSprout size={20} />

              <p className="text-sm font-semibold mt-1">Wild Collection</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Services_section

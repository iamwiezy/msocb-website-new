import { Link } from "gatsby";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./fonts.css";
import ReactNotification  from "./ReactNotification";
import Twitterdata from "./twitter";
const About_msocb = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Images Section */}
        <div className="flex flex-col items-center gap-8">
          {/* Main Image */}
          <div className="relative group w-60 h-60 rounded-full overflow-hidden border-4 border-green-600 shadow-xl">
            <StaticImage
              src="../images/notification-1.jpg"
              alt="Organic Farming"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white font-semibold text-lg">Organic Farming</p>
            </div>
          </div>

          {/* Small Stacked Images */}
          <div className="flex gap-6">
            <div className="relative group w-24 h-24 rounded-full overflow-hidden border-4 border-green-600 shadow-md">
              <StaticImage
                src="../images/notification-2.jpg"
                alt="Farming"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-sm font-semibold text-center">Farming</p>
              </div>
            </div>

            <div className="relative group w-24 h-24 rounded-full overflow-hidden border-4 border-green-600 shadow-md">
              <StaticImage
                src="../images/notification-3.jpg"
                alt="Fresh Produce"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-white text-sm font-semibold text-center">Fresh Produce</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="text-justify">
          <p className="text-yellow-600 font-semibold mb-2 text-sm uppercase tracking-wide">
            Our Introductions
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Meghalaya State Organic Certification Body
          </h2>
          <p className="text-green-700 font-medium mb-4 text-base">
            Accredited certification body for NPOP third party certification
            under Agricultural and Processed Food Products Export Development
            Authority (APEDA)
          </p>
          <p className="text-gray-700 text-sm mb-6">
            MSOCB ensures organic certification, maintaining authenticity and
            quality, while supporting farmers in sustainable agriculture across
            Meghalaya and beyond.
          </p>

          <ul className="text-gray-700 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✅</span>
              <span>APEDA accredited for NPOP organic certification</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✅</span>
              <span>Ensuring Organic Integrity</span>
            </li>
          </ul>

          <Link to="/about_section">
            <button className="mt-6 px-6 py-3 bg-green-600 text-white hover:bg-white hover:text-green-600 border border-green-600 rounded-full font-semibold transition duration-300">
              Discover More
            </button>
          </Link>
        </div>

        {/* Notification Sidebar Section */}
        <div className="w-full">
          <ReactNotification />
          {/* <Twitterdata/> */}
        </div>
      </div>
    </section>
  );
};

export default About_msocb;

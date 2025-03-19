import React from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FiArrowRight } from "react-icons/fi"
import LogoImg from "../images/MSOCB-removebg-preview.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Social Media */}
        <div>
          <img src={LogoImg} alt="MSOCB Logo" className="h-10" />{" "}
          {/* Update logo path */}
          <p className="text-sm mt-2">
            This is just a demo text for the footer of MSOCB, the real data will
            be updated later once everything is finalized!
          </p>
        </div>

        {/* Middle Section - Explore & News */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold text-2xl">Explore</h3>
            <ul className="mt-2 space-y-2 text-sm ">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  NPOP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Meet the Farmers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-2xl">News</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Partnerships to support organic farmers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Meghalaya State Organic & Natural Farming Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact & Newsletter */}
        <div>
          <h3 className="text-white font-semibold text-2xl">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center">
              <MdPhone size={16} className="mr-2 text-green-400" /> 635285045
            </li>
            <li className="flex items-center">
              <MdEmail size={16} className="mr-2 text-green-400" />{" "}
              msocb.info@gmail.com
            </li>
            <li className="flex items-center">
              <MdLocationOn size={16} className="mr-2 text-green-400" /> Upper
              Shillong, 793009
            </li>
          </ul>
          {/* Newsletter Input */}
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-green-500 text-white px-3 rounded-r-md hover:bg-green-600">
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        <p>© All Copyright 2025 by MSOCB</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-green-400 text-white no-underline">
            Terms of Use
          </a>
          <a href="#" className="hover:text-green-400 text-white no-underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

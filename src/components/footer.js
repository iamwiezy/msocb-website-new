import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FiArrowRight } from "react-icons/fi"
import LogoImg from "../images/MSOCB-removebg-preview.png"

const Footer = () => {
  const NAV_ITEMS = [
    { name: "About", link: "/about_section" },
    { name: "Services", link: "/services_page" },
    { name: "NPOP", link: "/npop" },
    { name: "Notification", link: "/notification_page" },
    { name: "FAQ", link: "/faq_page" },
    { name: "Contact", link: "/contact_page" },
  ]
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & Social Media */}
        <div>
          <img src={LogoImg} alt="MSOCB Logo" className="h-10" />{" "}
          {/* Update logo path */}
          <p className="text-sm mt-2">
            MSOCB ensures organic certification, maintaining authenticity and quality, while supporting farmers in sustainable agriculture across Meghalaya and beyond.
          </p>
        </div>

        {/* Middle Section - Explore & News */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold text-2xl">Explore</h3>
            <ul className="mt-2 space-y-2 text-sm ">
              {NAV_ITEMS.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-green-400 no-underline text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-2xl">External Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a
                  href="https://apeda.gov.in/"
                  target="_blank"
                  className="hover:text-green-400 no-underline text-white"
                >
                  APEDA
                </a>
              </li>
              <li>
                <a
                  href="https://megbrdc.nic.in/"
                  target="_blank"
                  className="hover:text-green-400 no-underline text-white"
                >
                  BRDC
                </a>
              </li>
              <li>
                <a
                  href="https://meghalaya.gov.in/"
                  target="_blank"
                  className="hover:text-green-400 no-underline text-white"
                >
                  Government of Meghalaya
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
              <MdPhone size={16} className="mr-2 text-green-400" />
              +91 6033426943
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

import React, { memo } from "react"
import LogoImg from "../images/MSOCB-removebg-preview.png"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import "./fonts.css"

// Contact information - extracted as constants to improve maintainability
const CONTACT_INFO = {
  phone: "+91 6033426943",
  email: "msocbinfo009@gmail.com",
  address: "Upper Shillong, 793009 6th Mile, Laitmynsaw Village",
}

// Extracted ContactItem component for better reusability and cleaner code
const ContactItem = memo(({ icon: Icon, text, href }) => (
  <a
    href={href}
    className="flex items-center gap-2 hover:text-green-600 transition text-[#878680] no-underline cursor-pointer"
    aria-label={`Contact via ${href ? href.split(":")[0] : "location"}`}
  >
    <Icon size={18} className="text-green-500" />
    <span>{text}</span>
  </a>
))

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-evenly px-6 lg:px-12">
        {/* Logo */}
        <div className="mb-4 lg:mb-0">
          <img
            src={LogoImg}
            alt="MSOCB LOGO"
            className="h-14 lg:h-16"
            loading="eager"
            width="auto"
          />
        </div>

        {/* Contact Details */}
        <div className="hidden lg:flex flex-wrap items-center gap-6 text-[12px] text-gray-600">
          <ContactItem
            icon={FaPhoneAlt}
            text={CONTACT_INFO.phone}
            href={`tel:${CONTACT_INFO.phone}`}
          />

          <ContactItem
            icon={FaEnvelope}
            text={CONTACT_INFO.email}
            href={`mailto:${CONTACT_INFO.email}`}
          />

          <ContactItem
            icon={FaMapMarkerAlt}
            text={CONTACT_INFO.address}
            href={`https://maps.google.com/?q=${encodeURIComponent(
              CONTACT_INFO.address
            )}`}
          />
        </div>
      </div>
    </header>
  )
}

export default memo(Header)

import React, { useState, useCallback, memo } from "react"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import { IoIosArrowDown } from "react-icons/io"

// Navigation data - moved outside component to avoid re-creation on render
const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about_section" },
  { name: "Services", link: "/services_page" },
  { name: "NPOP", link: "/npop" },
  { name: "Notification", link: "/notification_page" },
  {
    name: "Explore",
    link: "#",
    dropdown: [
      { name: "Gallery", link: "/masonry_gallery" },
      { name: "Organizational Structure", link: "/organizational_structure" },
      { name: "Activities", link: "/activities" },
      { name: "Training Capacities", link: "/training_capacities" },
    ],
  },
  { name: "FAQ", link: "/faq_page" },
  { name: "Contact", link: "/contact_page" },
]

// Extracted components for better organization and reusability
const DropdownMenu = memo(({ item, isMobile, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false)

  if (isMobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full cursor-pointer px-4 py-2 flex justify-center items-center text-gray-700 hover:text-green-600"
        >
          {item.name}{" "}
          <IoIosArrowDown
            className={`ml-1 text-xs transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul className="flex flex-col space-y-2 bg-gray-100 rounded-md py-2 mt-1">
            {item.dropdown.map((subItem, subIndex) => (
              <li key={subIndex}>
                <Link
                  to={subItem.link}
                  className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-200 no-underline"
                  onClick={() => {
                    setIsOpen(false)
                    closeMenu()
                  }}
                >
                  {subItem.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }

  // Desktop version
  return (
    <div className="relative group">
      <button className="hover:text-green-600 transition duration-300 text-[#878680] no-underline cursor-pointer flex items-center">
        {item.name} <IoIosArrowDown className="ml-1 text-xs" />
      </button>
      <div className="absolute left-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <ul className="w-48 bg-white shadow-md rounded-md overflow-hidden">
          {item.dropdown.map((subItem, subIndex) => (
            <li key={subIndex} className="hover:bg-green-100">
              <Link
                to={subItem.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600 no-underline"
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

const NavItem = memo(({ item, isMobile, closeMenu }) => {
  if (item.dropdown) {
    return (
      <DropdownMenu item={item} isMobile={isMobile} closeMenu={closeMenu} />
    )
  }

  return (
    <Link
      to={item.link}
      className={`hover:text-green-600 transition duration-300 ${
        isMobile
          ? "block px-4 py-2 text-gray-700 no-underline"
          : "text-[#878680] no-underline cursor-pointer"
      }`}
      onClick={isMobile ? closeMenu : undefined}
    >
      {item.name}
    </Link>
  )
})

const MobileMenu = memo(({ isOpen, closeMenu }) => {
  const menuClasses = `
    lg:hidden absolute top-16 left-0 w-full bg-white shadow-md transition-transform duration-300
    ${
      isOpen
        ? "translate-y-0 opacity-100 visible"
        : "-translate-y-full opacity-0 invisible"
    }
  `.trim()

  return (
    <div className={menuClasses}>
      <ul className="flex flex-col items-center py-4 space-y-4 text-gray-600 text-sm font-medium">
        {NAV_ITEMS.map((item, index) => (
          <li key={index} className="w-full text-center">
            <NavItem item={item} isMobile={true} closeMenu={closeMenu} />
          </li>
        ))}
      </ul>
    </div>
  )
})

const DesktopMenu = memo(() => (
  <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-600">
    {NAV_ITEMS.map((item, index) => (
      <NavItem key={index} item={item} isMobile={false} />
    ))}
  </div>
))

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <nav className="shadow-md py-4 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-evenly px-6 lg:px-24">
        {/* Desktop Navigation */}
        <DesktopMenu />

        {/* Search Button (Desktop) */}
        {/* <button
          className="text-gray-600 hover:text-green-600 transition duration-300 hidden lg:block"
          aria-label="Search"
        >
          <FaSearch size={20} />
        </button> */}

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-gray-600 hover:text-green-600 transition duration-300 absolute top-0 right-6"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  )
}

export default Navbar

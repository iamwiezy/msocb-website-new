import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./fonts.css"
import { Link } from "gatsby"

const Home_Page = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <StaticImage
          src="../images/home_page.jpeg"
          alt="Farming in Meghalaya"
          placeholder="blurred"
          layout="fullWidth"
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-10 md:ml-20 max-w-2xl text-white">
          <p className="text-sm md:text-base mb-2">WELCOME TO</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-green-600">
            MEGHALAYA STATE ORGANIC
            <br />
            CERTIFICATION BODY
          </h1>
          <p className="text-sm md:text-base mb-8 leading-relaxed">
            Meghalaya, an agrarian state, follows traditional organic farming
            with minimal chemical use. It stopped fertilizer subsidies in 2015
            to promote sustainability. The MSOCB now certifies organic produce
            across Northeast and East India.
          </p>
          <button className="bg-green-600 hover:bg-white/80 text-white-600 hover:text-green-600 py-3 px-6 rounded transition duration-300">
            <Link
              to="/about_section"
              className="text-white hover:text-green-600 no-underline"
            >
              Discover More
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home_Page

import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import VideoSection from "../components/video_section"
import BannerImage from "../images/banner.jpg"
import about from "../images/home-page.jpg"
import about2 from "../images/home-page-1.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faTable } from "@fortawesome/free-solid-svg-icons" // Represents tabular data
const About_Section = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <div
                className="relative w-full h-60 md:h-72 bg-cover bg-center"
                style={{ backgroundImage: `url(${BannerImage})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                  <p className="text-sm uppercase tracking-widest">Home / About</p>
                  <h1 className="text-4xl md:text-5xl font-bold mt-1">About</h1>
                </div>
              </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <div className="w-full h-auto rounded-lg overflow-hidden">
              <img
                src={about}
                alt="Farm"
                className="w-full rounded-lg shadow-lg"
              />{" "}
              {/* Update Image Path */}
            </div>
            <div className="absolute -bottom-8 left-8 w-48 h-36 bg-green-500 rounded-lg"></div>
            <div className="absolute -bottom-4 left-4 w-48 h-36 overflow-hidden rounded-lg shadow-lg">
              <img
                src={about2}
                alt="Farmer"
                className="w-full h-full object-cover"
              />{" "}
              {/* Update Image Path */}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-justify">
            <p className="text-green-600 uppercase text-sm font-semibold">
              Get to Know Us
            </p>
            <h2 className="text-3xl font-bold mt-2 uppercase">
              Meghalaya State Organic <br /> Certification Body
            </h2>
            <p className="text-gray-600 mt-4">
              The{" "}
              <span className="text-green-500 font-semibold">
                Bio-Resources Development Centre (BRDC)
              </span>
              , Planning Department, Govt. of Meghalaya, established the
              <span className="text-green-500 font-semibold">
                {" "}
                Meghalaya State Organic Certification Body (MSOCB)
              </span>{" "}
              vide notification No.PLA.6/2014/255 dated 21.12.2023 which shall
              function as full autonomy for the certification activities as per
              NPOP standard guidelines.anic crop production, wild collection,
              and related activities.
            </p>
            <p className="text-gray-600 mt-4 align-center">
              <span className="text-green-500 font-semibold">
                {" "}
                Meghalaya State Organic Certification Body (MSOCB)
              </span>{" "}
              intends to provide NPOP certification through an institutional
              mechanism for the implementation of National Standard for Organic
              Production to its to its operators for organic crop production,
              wild collection etc. Meghalaya State Organic Certification Body
              (MSOCB), has obtained accreditation as certification body for NPOP
              third party certification under Agricultural and Processed Food
              Products Export Development Authority (APEDA), Ministry of
              Commerce and Industry, Government of India as per letter
              ORG-2023-24-000111/0998 on the 04/10/2024 with the Accreditation
              no. NPOP/NAB/0050.
            </p>
          </div>
        </div>
      </div>
      {/* <ListOfOperators /> */}
      <div className="cursor-pointer w-full max-w-3xl mx-auto rounded-2xl mb-6 border border-green-900 bg-white px-8 py-6 text-green-900 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center space-x-6">
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
              <FontAwesomeIcon
                icon={faTable}
                className="text-green-600 text-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <a
              href="https://docs.google.com/spreadsheets/d/1FscCHEHUbDDBckkZ4IBgP_En4Uf4i-7SJLf9hR-CjbU/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-green-900 hover:underline"
            >
              List of Operators registered under MSOCB
            </a>
            <p className="text-green-700 mt-1 text-sm">
              Click to view the official spreadsheet of certified operators
              listed under the Meghalaya State Organic Certification Board.
            </p>
          </div>

          {/* Right Arrow */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-green-500 text-xl"
          />
        </div>
      </div>
      <div className="cursor-pointer w-full max-w-3xl mx-auto rounded-2xl mb-6 border border-green-900 bg-white px-8 py-6 text-green-900 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center space-x-6">
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
              <FontAwesomeIcon
                icon={faTable}
                className="text-green-600 text-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <a
              href="https://docs.google.com/spreadsheets/d/1mu8sfyrlZ_rQm-WrblQuZMxyWgLZD4b-d3ku38DAJi0/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-green-900 hover:underline"
            >
              List of Operators suspended under MSOCB
            </a>
            <p className="text-green-700 mt-1 text-sm">
              Click to view the official spreadsheet of certified operators
              listed under the Meghalaya State Organic Certification Board.
            </p>
          </div>

          {/* Right Arrow */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-green-500 text-xl"
          />
        </div>
      </div>
      <div className="cursor-pointer w-full max-w-3xl mx-auto rounded-2xl mb-6 border border-green-900 bg-white px-8 py-6 text-green-900 shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="flex items-center space-x-6">
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100">
              <FontAwesomeIcon
                icon={faTable}
                className="text-green-600 text-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1"> 
            <a
              href="https://docs.google.com/spreadsheets/d/1cdG__W7KOGvdPp1uWVh6Dd4xmDgDKR8f0ixCphONffs/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-xl font-bold text-green-900 hover:underline"
            >
              List of Operators terminated under MSOCB
            </a>
            <p className="text-green-700 mt-1 text-sm">
              Click to view the official spreadsheet of certified operators
              listed under the Meghalaya State Organic Certification Board.
            </p>
          </div>

          {/* Right Arrow */}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-green-500 text-xl"
          />
        </div>
      </div>
      <VideoSection />

      <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800 text-justify">
        <h2 className="text-4xl font-bold text-center mb-8 uppercase">
          Our Vision, Mission & Core Values
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold">Vision</h3>
          <p className="mt-2 text-gray-600 text-xl">
            To be a valuable partner in providing sustainable solutions for the
            welfare of mankind and the environment.
          </p>
        </div>

        <div className="">
          <h3 className="text-2xl font-semibold">Mission</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 text-xl">
            <li>
              To serve organic farmers by providing quick and reliable organic
              certification services to enable them to get better premiums in
              the market.
            </li>
            <li>
              To serve the consumers of organic products by authenticating
              genuine organic products for their consumption to enable them to
              have a healthy living.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Our Core Values</h3>
          <ul className="list-disc list-inside mt-2 text-gray-600 text-xl">
            <li>
              We understand the value of time and hence, avoid procrastination
              in all our certification activities.
            </li>
            <li>
              We make sure to minimize errors in our performance to make our
              clients and other stakeholders happy always.
            </li>
            <li>
              We continuously update our competencies of the team members to
              offer best performance and satisfaction to all.
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About_Section

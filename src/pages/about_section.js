import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import VideoSection from "../components/video_section"
import ListOfOperators from "../components/list_of_operators"
const About_Section = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="w-full">
        {/* Hero Section */}
        <div
          className="relative w-full h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        >
          {" "}
          {/* Update Image Path */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <p className="text-sm uppercase">Home / About</p>
            <h1 className="text-3xl font-bold">About</h1>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto py-16 px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <div className="w-full h-auto rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2321837/pexels-photo-2321837.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farm"
                className="w-full rounded-lg shadow-lg"
              />{" "}
              {/* Update Image Path */}
            </div>
            <div className="absolute -bottom-8 left-8 w-48 h-36 bg-green-500 rounded-lg"></div>
            <div className="absolute -bottom-4 left-4 w-48 h-36 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmer"
                className="w-full h-full object-cover"
              />{" "}
              {/* Update Image Path */}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
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
            <p className="text-gray-600 mt-4">
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
      <VideoSection />
      <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
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

      <ListOfOperators />
      <Footer />
    </div>
  )
}

export default About_Section

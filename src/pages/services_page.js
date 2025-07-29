import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import BannerImage from "../images/banner.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faTable } from "@fortawesome/free-solid-svg-icons" // Represents tabular data
import certificationProcedure from "../images/certification-procedure.png"
import { Link } from "gatsby"

const services = [
  {
    title: "Individual Grower",
    image:
      "https://images.pexels.com/photos/10079693/pexels-photo-10079693.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "ICS Group",
    image:
      "https://images.pexels.com/photos/4433935/pexels-photo-4433935.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Wild Collection",
    image:
      "https://media.istockphoto.com/id/2112419639/photo/houttuynia-cordata-thunb.jpg?b=1&s=612x612&w=0&k=20&c=cRXWWyDbWBKq3a__XPMAV5THCqrySiL88A1FhlETH8o=",
  },
]

const documents = [
  "EPIC/Voter ID",
  "Authorized Person’s Photo",
  "Land Holding Record & Field Map",
  "Government-Permitted Forest Map",
  "List of Collectors with Details",
  "Society Registration Document",
]

const ServicesPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div
              className="relative w-full h-60 md:h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${BannerImage})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
                <p className="text-sm uppercase tracking-widest">Home / Services</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-1">Services</h1>
              </div>
            </div>

      <div className="bg-gray-100 min-h-screen">
        {/* Service Section */}
        <div className="max-w-5xl mx-auto p-6 text-center">
          <h2 className="text-lg font-semibold mb-4">
            MSOCB will provide a scope of certification for Crop Production
            which is applicable to
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-4 text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg bg-bottom"
                />
                <h3 className="text-lg font-semibold mt-3">{service.title}</h3>
                <Link to={`/service-${index + 1}`}>
                  <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
                    Read More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Documents Section */}
        <div className="max-w-5xl mx-auto p-6">
          <h2 className="text-lg font-semibold mb-4">
            Documents required for registration:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className={`p-4 text-center text-white font-semibold rounded-md ${
                  index % 2 === 0 ? "bg-green-500" : "bg-yellow-500"
                }`}
              >
                {doc}
              </div>
            ))}
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
                href="https://docs.google.com/spreadsheets/d/1FscCHEHUbDDBckkZ4IBgP_En4Uf4i-7SJLf9hR-CjbU/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-bold text-green-900 hover:underline"
              >
                List of Operators Suspended under MSOCB
              </a>
              <p className="text-green-700 mt-1 text-sm">
                Click to view the official spreadsheet of suspended operators
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
                href="https://docs.google.com/spreadsheets/d/1FscCHEHUbDDBckkZ4IBgP_En4Uf4i-7SJLf9hR-CjbU/edit?gid=0#gid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-bold text-green-900 hover:underline"
              >
                List of Operators Terminated under MSOCB
              </a>
              <p className="text-green-700 mt-1 text-sm">
                Click to view the official spreadsheet of terminated operators
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

        <section className="flex justify-center my-10">
          <img
            src={certificationProcedure}
            alt="Certification Procedure"
            className="max-w-4xl w-full"
          />
        </section>

        <section className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmljdWx0dXJlfGVufDB8fDB8fHww"
              alt="Farmer"
              className="rounded-lg shadow-lg w-80 md:w-96"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ensuring Organic Integrity:{" "}
              <span className="text-green-600">Our Services</span>
            </h2>
            <p className="text-gray-700 mt-4">
              At MSOCB, we are committed to upholding the highest standards in
              organic certification. Our services include verifying organic
              farming practices, conducting thorough inspections, and ensuring
              compliance.
            </p>

            {/* Service Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Organic Certification",
                "Support to Farmers & Collectors",
                "Ensuring Compliance & Integrity",
              ].map((service, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg shadow-md flex flex-col items-center justify-center bg-cover bg-center text-white`}
                  style={{
                    backgroundImage: `url('https://source.unsplash.com/300x300/?organic,farming,${
                      index + 1
                    }')`,
                    height: "150px",
                    width: "150px",
                  }}
                >
                  <p className="font-semibold bg-black/50 p-2 rounded text-center">
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default ServicesPage

import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
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
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p className="text-sm uppercase">Home / Services</p>
          <h1 className="text-3xl font-bold">Services</h1>
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

        <section className="flex justify-center my-10">
          <img
            src="/images/certification-procedure.png"
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

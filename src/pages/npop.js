import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Npop from "../images/NPOP.png"
import { MdNaturePeople } from "react-icons/md"
const NPOP = () => {
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
        {" "}
        {/* Update Image Path */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p className="text-sm uppercase">Home / Services</p>
          <h1 className="text-3xl font-bold">Services</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-green-200 rounded-lg shadow-lg p-8 flex flex-col  items-center justify-center">
          <div className="text-green-900 text-4xl font-extrabold uppercase">
            <h1>Understanding NPOP</h1>
          </div>
          <img src={Npop} alt="NPOP Logo" className="w-60" />
        </div>

        {/* Content Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Main Text */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 uppercase">
              What is the National Programme on Organic Production (NPOP)?
            </h2>
            <p className="text-gray-600 mt-4 text-md">
              Although, India had been traditionally organic with large pool of
              traditional wisdom on best practices in organic agriculture, the
              modern standards based organic agriculture started only recently
              with the growing demand for organic food and fiber in the western
              world. With the growing demand for organic food in national and
              international markets, it became necessary to ensure that the
              agricultural products labelled as “organic” comply the basic
              standards of organic production and entire production process is
              verified by independent certification agencies.
            </p>
            <p className="text-gray-600 mt-2">
              The National Program for Organic Production (NPOP) launched during
              2001 laid the foundation for systematic development of organic
              agriculture sector in the country. It was the first such quality
              assurance initiative by the Government of India under Ministry of
              Commerce and Industry. The NPOP not only provided the
              institutional framework for accreditation of certification
              agencies and operationalization of certification program through
              its accredited certification bodies or CB but also ensures that
              the system effectively works and is monitored on regular basis.
            </p>
            <p className="text-gray-600 mt-2">
              During 2004 the NPOP was brought under the ambit of Foreign Trade
              Development and Regulation (FTDR) Act wherein it was mandated that
              no organic products can be exported unless they are certified
              under NPOP. NPOP has earned international recognition and enjoys
              recognition agreements with European Union, Switzerland and USDA -
              NOP. NPOP is being managed and operated by the Agricultural and
              Processed Food Products Export Development Authority (APEDA) under
              Ministry of Commerce and Industry, Government of India.
            </p>
          </div>

          {/* External Links Card */}
          <div className="bg-white shadow-lg rounded-lg p-5 border-t-4 border-green-500">
            <h3 className="font-semibold text-gray-800">More Information</h3>
            <ul className="mt-3 space-y-2">
              <li>
                📌{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Official NPOP Website
                </a>
              </li>
              <li>
                📌{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Certification Process
                </a>
              </li>
              <li>
                📌{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Latest Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NPOP

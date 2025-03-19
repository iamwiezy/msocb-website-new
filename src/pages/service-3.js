import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Service3 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Wild Collection</h1>
        <img
          src="https://images.pexels.com/photos/10079693/pexels-photo-10079693.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <ul>
          <li>
            Collection of non-cultivated materials of plant origin should
            positively contribute to the maintenance of natural areas and
            attention should be paid to maintenance and sustainability of the
            ecosystem.
          </li>
          <li>Collected food products should not be harmful to human health</li>
          <li>
            Products shall only be certified organic if derived from clearly
            defined collection areas, which are not exposed to prohibited
            substance and which is subject to inspection
          </li>
          <li>
            The collection area shall be at an appropriate distance from
            conventional farming, pollution and contamination
          </li>
          <li>
            The Blue Print of Harvest/ Collection area has to be provided to the
            Certification Body.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Service3

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import TrainingCapacityPic9 from "../images/training-capacity-9.jpg"

const TrainingCapacity9 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Exposure Visit of MSOCB Team to KSOCA from 27th November 2023 to 1st
          December 2023
        </h1>
        <StaticImage
          src="../images/training-capacity-9.jpg"
          alt="Training Capacity"
        />
        <p className="mt-4 text-base">
          As a new CB to be established, the team from the Meghalaya State
          Organic Certification Body (MSOCB) visited Karnataka State Organic
          Certification Agency (KSOCA) for an exposure visit. The purpose of the
          visit is to understand the certification process, the challenges and
          the strategy involved therein.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity9

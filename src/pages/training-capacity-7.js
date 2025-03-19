import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const TrainingCapacity7 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Mock field Training programme on inspection for Internal Control
          System-ICS Group conducted by the Team from MSOCB under the
          supervision of Shri Dorairaj K., Consultant Organic certification on
          the 15th March 2024
        </h1>
        <img
          src="/images/training-capacity-7.jpg"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-base">
          The field inspection to an ICS group under the facilitation of the
          Directorate of Horticulture, Government of Meghalaya was conducted on
          the 15th March 2024 as part of the capacity building to the staff of
          MSOCB.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity7

import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const TrainingCapacity2 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Training on Sampling Procedures organized by MSOCB from 16th-17th
          April 2024
        </h1>
        <img
          src="/images/training-capacity-2.jpg"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-base">
          A two day training programme on Sample Collection and Sending
          Procedures was conducted by Dr. Abhay Ekbote, Director- Technical of
          Avon Food Lab Pvt Ltd at BRDC Experimental Farm, Laitmynsaw. It was a
          detailed session which covered all the aspects of sampling for soil,
          water and plant materials. The Procedures for sending samples was also
          elaborated for all the sampling conducted.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity2

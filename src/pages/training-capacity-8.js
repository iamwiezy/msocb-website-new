import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const TrainingCapacity8 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Training on TraceNet operations and the training encompasses the step
          for Registration of operators under the different categories under
          crop production as per NPOP conducted by Mr. Dorairaj K (Consultant
          Organic Farming) engaged by MSOCB on the 16th March 2024
        </h1>
        <img
          src="../images/training-capacity-8.jpg"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-base">
          A one day training on TraceNet was conducted for the staff of MSOCB
          which is an electronic service offered by APEDA to the stakeholders
          for facilitating process certification for the export of organic
          products from India which comply with the NPOP or NOP standard. The
          training has covered different topics that are required for
          certification bodies, including the process for generating Transaction
          Certificate and NOCs by Certification Body etc.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity8

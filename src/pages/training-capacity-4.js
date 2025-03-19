import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const TrainingCapacity4 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          5 days training conducted by Indian Institute of Plantation Management
          (IIPM), Bengaluru at BRDC, Upper Shillong from 1st to 5th March 2022
        </h1>
        <img
          src="../images/training-capacity-4.jpg"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-base">
          A five day awareness training programme was conducted by Indian
          Institute of Plantation Management (IIPM), Bengaluru which was
          organized by BRDC, Upper Shillong for the staff of BRDC for the NPOP
          organic certification programme what will be implemented by the
          centre.
        </p>
        <p className="text-xl text-green-600 font-bold">Resource Person:</p>
        <p className="mt-4 text-base">
          <ul className="list-decimal list-inside">
            <li>
              Dr. Prafull Prabhakar Gadge, Ph. D. Biochemistry, CEO & Principal
              Scientist Biome Technologies Pvt. Ltd.
            </li>
            <li>
              Dr. Bibhishan Sudrik, Ph. D. Genetics and Plant Breeding,
              Principal Scientist Biome Technologies Pvt. Ltd.
            </li>
            <li>
              Dr. Ankur Gogoi, Assistant Professor, Indian Institute of
              Plantation Management, Jorhat, Assam.
            </li>
          </ul>
        </p>
        <p className="mt-4 text-base">
          The training programs encompasses standard guiding principle in
          organic certification as per National Programme for Organic Production
          (NPOP). Concept of natural farming, organic farming and conventional
          farming systems, its differences and limitations was also thoroughly
          discussed during the training session. A detailed discussion on
          certification process under crop production standard guidelines
          related to organic certification were highlighted, in which input
          which falls under Permitted, Restricted and Prohibited categories were
          discussed. Organic livestock, poultry and apiculture standard
          guidelines was also thoroughly discussed whereby the various
          permitted, restricted and prohibited inputs and actions involve
          therein was highlighted.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity4

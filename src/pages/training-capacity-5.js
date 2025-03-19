import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import TrainingCapacityPic5 from "../images/training-capacity-5.jpg"

const TrainingCapacity5 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          6-days mock field training programme on inspection for individual
          farmer, farmer groups (Internal Control System-ICS group) and wild
          collection area conducted by Shri Dorairaj, Consultant Organic
          Certification held from 13th - 18th June, 2022
        </h1>
        <img
          src={TrainingCapacityPic5}
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-base">
          Staff in the Meghalaya State Organic Certification Body (MSOCB) were
          thoroughly trained for 6- days in conducting inspection and
          certification process as per NPOP which was conducted by Shri
          Dorairaj, and held at the identified 3 sites for the mock field
          inspection for the three categories of operators i.e. (i).
          Individual(ii).Growers Group (ICS) and (iii).Wild collection category.
          The training was held from the13th - 18th June, 2022.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity5

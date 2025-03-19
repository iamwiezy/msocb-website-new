import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Service1 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">Individual Grower</h1>
        <img
          src="https://images.pexels.com/photos/10079693/pexels-photo-10079693.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4">
          An individual operator or farmer who intends to get organic
          certification has to submit the following necessary documents along
          with the application form: Farm Legal Documents Detailed Farm Map
          Farmer PAN Card with Passport Size Photo GPS Reading (latitude,
          longitude of the farm) Supporting documents (Route Map, Farm Diary,
          Copy of Purchase Bills/Invoices)
        </p>
      </div>
      <Footer />
    </>
  )
}

export default Service1

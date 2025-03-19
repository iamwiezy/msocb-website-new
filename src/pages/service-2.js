import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Service2 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">ICS Grower Group</h1>
        <img
          src="https://images.pexels.com/photos/4433935/pexels-photo-4433935.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="text-justify mt-4">
          An Internal Control System (ICS) is the part of a documented quality
          assurance system that allows an external certification body to
          delegate the periodic inspection of individual group members to an
          identified body or unit within the certified operators.
        </p>
        <p className="text-xl text-green-600 font-bold">
          Importance of ICS Management
        </p>
        <ul>
          <li>To smoothen the process of Project implementation</li>
          <li>To maintain transparency in the system</li>
          <li>To assure the quality of the Produce</li>
        </ul>
        <p className="text-xl text-green-600 font-bold">
          Requirements for Group Certification
        </p>
        <ul>
          <li>
            The Group shall have a registered legal entity and farmers in the
            group should be in close geographical proximity and similar
            production system
          </li>
          <li>
            The Group shall have a minimum of 25 members and maximum of 500
            members.
          </li>
          <li>
            A minimum of 2 inspection shall be conducted annually by the
            internal inspectors before the inspection by external Certification
            Body.
          </li>
          <li>
            In order to implement the ICS effectively, the staff has to be
            appointed such as Quality Manager, Internal inspectors, Approval
            Manager, Field officers, Purchase officers, Warehouse Manager,
            Processing Manager
          </li>
          <li>An internal standard has to be prepared in local language</li>
          <li>Training has to be given to all the ICS Staff</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Service2

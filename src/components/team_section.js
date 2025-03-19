import React from "react"

import Person1 from "../images/person-1.jpg"
import Person2 from "../images/person-2.jpg"
import Person3 from "../images/person-3.jpg"
import Person4 from "../images/person-4.jpg"

const teamMembers = [
  {
    name: "Gunanka DB, IFS",
    role: "COO",
    image: Person3,
  },
  {
    name: "Rafael",
    role: "Quality Manager, MSOCB",
    image: Person3,
  },
  {
    name: "Yooda",
    role: "Evaluator, MSOCB",
    image: Person3,
  },
  {
    name: "Daphi",
    role: "Inspector/Auditor, MSOCB",
    image: Person4,
  },
  {
    name: "Rikyr",
    role: "Inspector/Auditor, MSOCB",
    image: Person4,
  },
  {
    name: "Aibor",
    role: "Inspector/Auditor, MSOCB",
    image: Person3,
  },
  {
    name: "Dari",
    role: "Inspector/Auditor, mSOCB",
    image: Person4,
  },
  {
    name: "Bantei",
    role: "Program Associate IT, MSOCB",
    image: Person3,
  },
]

const TeamSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      {/* Section Heading */}
      <h3 className="text-yellow-600 font-semibold text-lg">Team Members</h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">Meet Our Team</h2>

      {/* First Member (Centered at Top) */}
      <div className="mt-8 flex flex-col items-center">
        <img
          src={teamMembers[0].image}
          alt={teamMembers[0].name}
          className="w-40 h-40 object-cover rounded-full border-4 border-yellow-400"
        />
        <h4 className="mt-4 text-lg font-semibold text-gray-900">
          {teamMembers[0].name}
        </h4>
        <p className="text-gray-500 text-sm">{teamMembers[0].role}</p>
      </div>

      {/* Rest of the Team Members in a Row */}
      <div className="mt-8 flex flex-wrap justify-center gap-10">
        {teamMembers.slice(1).map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400"
            />
            <h4 className="mt-3 text-lg font-semibold text-gray-900">
              {member.name}
            </h4>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection

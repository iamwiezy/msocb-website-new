import React, { useState } from "react"
import { ChevronRight } from "lucide-react" // Using Lucide React Icons
import { Link } from "gatsby"

import Person1 from "../images/person-1.jpg"
import Person2 from "../images/person-2.jpg"
import Person3 from "../images/person-3.jpg"

const faqs = [
  {
    question: "How can a farmer get organic certification?",
    answer:
      "Farmers can apply for organic certification through recognized agencies and follow strict guidelines.",
  },
  {
    question: "Is organic certification mandatory for selling organic produce?",
    answer:
      "Yes, certification is required for selling produce as certified organic in regulated markets.",
  },
  {
    question: "Are there subsidies for organic certification?",
    answer:
      "Yes, various government schemes provide subsidies for farmers seeking organic certification.",
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 gap-6">
        {/* Left Section: Image & Contact Box */}
        <div className="relative w-full md:w-1/2">
          <div className="bg-green-300 rounded-lg p-6">
            <img
              src={Person1}
              alt="Farmer with organic produce"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-6 left-6 bg-yellow-400 p-3 rounded-lg shadow-md text-center">
              <p className="text-sm text-white">Call us anytime</p>
              <p className="font-bold text-lg text-black">+91 60334 26943</p>
            </div>
          </div>
        </div>

        {/* Right Section: FAQs */}
        <div className="w-full md:w-1/2">
          <h3 className="text-yellow-600 font-semibold">
            Frequently Asked Questions
          </h3>
          <h2 className="text-3xl font-bold mt-1">You've Any Questions</h2>

          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-medium">{faq.question}</p>
                <button className="p-2 bg-green-300 rounded-full">
                  <ChevronRight size={20} />
                </button>
              </div>
            ))}
            {openIndex !== null && (
              <p className="mt-2 text-gray-600 text-sm">
                {faqs[openIndex].answer}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to="/faq_page">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
            I got more questions...
          </button>
        </Link>
      </div>
    </>
  )
}

export default FAQSection

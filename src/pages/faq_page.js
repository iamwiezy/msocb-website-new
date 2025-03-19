import React, { useState } from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const faqs = [
  {
    question: "What is Organic Farming?",
    answer:
      "According to FAO, “Organic agriculture is a unique production management system which promotes and enhances agro-ecosystem health, including biodiversity, biological cycles and soil biological activity, and this is accomplished by using on-farm agronomic, biological and mechanical methods in exclusion of all synthetic off-farm inputs”.",
  },
  {
    question: "What are the benefits of Organic Farming?",
    answer:
      "Environmental friendly Promotes sustainable development Maintain and improve fertility, soil structure, bio diversity and reduce erosion Reduces health hazards",
  },
  {
    question: "What are the components of organic farming?",
    answer:
      "The components of Organic farming are Manures, Vermicompost, Biofertilizers, Green leaf manure, Crop rotation, Animal husbandry etc.",
  },
  {
    question: "What is Organic Certification?",
    answer:
      "  It is a quality assurance initiative, intended to assure quality, prevent fraud and promote commerce based on a set of standard and ethics. It certify producers of organic food and other organic products.",
  },
  {
    question: "Why is certification required?",
    answer:
      "Facilitating the sale of original and quality organic products to consumers. Third party assurance from producer to the consumer Assurance to the consumers that their concern for healthy food has been addresses Effective marketing tool for image, credibility, visibility/ transparency ",
  },
  {
    question: "How long will it take to convert any farm as certified organic?",
    answer:
      "The conversion period for Annuals is 24 months and for Perennials is 36 months",
  },
  {
    question:
      "Can we use Genetically Modified Organism (GMO) in the Organic Agriculture?",
    answer: "GMO is not allowed in organic farming",
  },
  {
    question: "What is National Programme for Organic Production?",
    answer:
      "NPOP is an over arching architecture and a program of the Government of India which provides an institutional mechanism for implementation of the National Standard for Organic Production.",
  },
  {
    question:
      "What do you understand by National Standard for Organic Production?",
    answer:
      "The National Standards for Organic Production sets out the standard to be followed in the cultivation/ harvest/ processing and trading of organic products",
  },
  {
    question: "Is it compulsory to have a Soil Test in Organic Farming?",
    answer:
      "Yes, it is compulsory for each and every farmer to have a soil test report.",
  },
  {
    question: "Define Parallel Production?",
    answer:
      "Any production where the same unit is growing, breeding, handling, or processing the same products both in certified organic quality and a non-certified organic quality.",
  },
  {
    question: "What is a Scope Certificate?",
    answer:
      "A certificate issued by the accredited certification body to its operator annually for their specific activity in terms of production, processing, and trading.",
  },
  {
    question: "What is a Transaction Certificate?",
    answer:
      "A certificate issued by the accredited certification body to its operator for every sale of his product to the buyer.",
  },
  {
    question: "How long is the organic certificate valid for?",
    answer:
      "Organic certificate is valid for one year from the date mentioned on the certificate. Once you enter into the certification system, you must apply for annual renewal to maintain certification status.",
  },
  {
    question:
      "Can a farmer practice Mixed cropping, intercropping, multiple cropping, and multi-storied cropping in organic farming?",
    answer: "Yes, it is advisable.",
  },
  {
    question:
      "Can a farmer use herbicides, insecticides, and fertilizers in organic farming?",
    answer: "No, it is prohibited.",
  },
  {
    question:
      "What kind of planting materials can a farmer use if organic certified seeds are not available?",
    answer: "A farmer can use chemically untreated planting materials.",
  },
  {
    question: "How are insect pests managed in Organic farming?",
    answer:
      "Available methods such as pheromone traps, predators, use of resistant varieties, light traps, bio-control agents, and botanical pesticides can be used.",
  },
  {
    question: "Mention the weed management strategies in Organic Farming?",
    answer:
      "Physical/Mechanical methods, cultural methods, crop rotation, mulching, cover crops, and biological management.",
  },
  {
    question: "How can a consumer trust that a product is really organic?",
    answer:
      "Look for a certification logo on the product, for example, NPOP’s India Organic logo.",
  },
]

const FaqPage = () => {
  const [search, setSearch] = useState("")

  // Filter FAQs based on search input
  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>

        <input
          type="text"
          placeholder="Search questions..."
          className="w-full max-w-lg p-3 border rounded-lg mb-6 outline-none focus:ring-2 focus:ring-green-500"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="w-full max-w-3xl">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold text-gray-700">
                  {faq.question}
                </h2>
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center">No matching FAQs found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FaqPage

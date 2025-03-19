import React from "react"
import { User, MessageCircle } from "lucide-react"

import Gallery1 from "../images/gal-1.jpg"
import Gallery2 from "../images/gal-2.jpg"
import Gallery3 from "../images/gal-3.jpg"

const articles = [
  {
    title: "Partnerships to Support Organic Farmers",
    date: "05 July 2023",
    author: "MSOCB",
    comments: 12,
    image: Gallery1,
  },
  {
    title: "Meghalaya State Organic and Natural Farming Policy 2023",
    date: "05 August 2023",
    author: "MSOCB",
    comments: 12,
    image: Gallery2,
  },
  {
    title: "Policy Initiatives for Sustainable Agriculture",
    date: "05 November 2024",
    author: "MSOCB",
    comments: 12,
    image: Gallery3,
  },
]

const NewsSection = () => {
  return (
    <section className="py-16 text-center bg-white">
      <h3 className="text-yellow-600 font-semibold text-lg">From MSOCB</h3>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">News & Articles</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover"
              />
              <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-lg">
                {article.date}
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-start space-x-4 text-gray-500 text-sm">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle size={16} className="mr-1" />
                  <span>{article.comments} Comments</span>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-2">
                {article.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default NewsSection

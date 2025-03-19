import React, { useState } from "react"
import Masonry from "react-masonry-css"
import "../components/fonts.css"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
const images = [
  "/images/gal-1.jpg",
  "/images/gal-2.jpg",
  "/images/gal-3.jpg",
  "/images/gal-4.jpg",
  "/images/gal-5.jpg",
  "/images/gal-6.jpg",
  "/images/gal-7.jpg",
  "/images/gal-8.jpg",
  "/images/gal-9.jpg",
  "/images/gal-10.jpg",
  "/images/gal-11.jpg",
  "/images/gal-12.jpg",
]

const MasonryGallery = () => {
  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  }

  const imagesPerPage = 6 // Number of images per page
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(images.length / imagesPerPage)

  // Slice the images for the current page
  const displayedImages = images.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  )

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 mt-2 mb-4">
        <h1 className="text-4xl text-center text-green-600 font-bold mb-6">
          Photo Gallery
        </h1>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Masonry>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
            onClick={() => setCurrentPage(prev => prev - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
            onClick={() => setCurrentPage(prev => prev + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MasonryGallery

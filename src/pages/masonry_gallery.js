import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Masonry from "react-masonry-css"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const MasonryGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodePhotoGallery {
        nodes {
          title
          relationships {
            field_upload_image {
              localFile {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  const rawImages = data.allNodePhotoGallery.nodes
  const galleryImages = rawImages
    .filter(node => node.relationships.field_upload_image?.localFile?.publicURL)
    .map(node => ({
      url: node.relationships.field_upload_image.localFile.publicURL,
      title: node.title,
    }))

  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  }

  const imagesPerPage = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)

  const displayedImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  )

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-4">
        <h1 className="text-4xl text-center text-green-600 font-bold mb-6">
          Photo Gallery
        </h1>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="bg-white px-2 py-1 text-sm text-center font-medium">
                {img.title}
              </div>
            </div>
          ))}
        </Masonry>

        <div className="flex justify-center mt-6 gap-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
            onClick={() => {
              setCurrentPage(prev => prev - 1)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-lg font-semibold">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg disabled:bg-gray-400"
            onClick={() => {
              setCurrentPage(prev => prev + 1)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={e => {
            if (e.target === e.currentTarget) setSelectedImage(null)
          }}
        >
          <div className="relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}

export default MasonryGallery

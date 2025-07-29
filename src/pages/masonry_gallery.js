import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Masonry from "react-masonry-css";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
  `);

  const rawImages = data.allNodePhotoGallery.nodes;

  const galleryImages = rawImages
    .filter((node) => node.relationships.field_upload_image?.localFile?.publicURL)
    .map((node) => ({
      url: node.relationships.field_upload_image.localFile.publicURL,
      title: node.title,
    }));

  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  };

  const imagesPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);

  const displayedImages = galleryImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-10">
        <h1 className="text-4xl text-center text-green-600 font-bold mb-8">Photo Gallery</h1>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-6"
          columnClassName="masonry-column space-y-6"
        >
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 text-center font-medium text-gray-800 text-sm transition-colors duration-200 group-hover:text-green-700">
                {img.title}
              </div>
            </div>
          ))}
        </Masonry>

        {/* Pagination Controls */}
        <div className="flex flex-wrap justify-center items-center mt-10 gap-6 px-2">
          <button
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition shadow-sm hover:shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={() => {
              setCurrentPage((prev) => prev - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-base font-medium text-gray-700">
            Page <strong className="text-green-600">{currentPage}</strong> of {totalPages}
          </span>

          <button
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition shadow-sm hover:shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
            onClick={() => {
              setCurrentPage((prev) => prev + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <div className="relative max-w-5xl w-full overflow-hidden rounded-xl shadow-2xl bg-white">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto object-contain rounded-t-xl"
            />
            <div className="absolute bottom-0 w-full flex items-center justify-between bg-white/90 px-4 py-2 text-gray-800 text-sm font-semibold backdrop-blur border-t rounded-b-xl">
              <span>{selectedImage.title}</span>
              <button
                onClick={() => setSelectedImage(null)}
                className="ml-auto bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100 border"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default MasonryGallery;

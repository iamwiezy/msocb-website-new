import React, { useRef, useState, useCallback, memo } from "react"
import { FaPlay, FaPause } from "react-icons/fa"
import { Link } from "gatsby"
import Masonry from "react-masonry-css"

import PreviewImage1 from "../images/gal-1.jpg"
import PreviewImage2 from "../images/gal-2.jpg"
import PreviewImage3 from "../images/gal-3.jpg"

import Video from "../images/video-2.mp4"

const VideoSection = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const previewImages = [PreviewImage1, PreviewImage2, PreviewImage3]

  const breakpointColumns = {
    default: 3,
    1024: 2,
    768: 1,
  }

  return (
    <>
      <div className="flex items-center justify-center h-full mt-8 mb-8">
        <div className="relative w-[80%] h-[80vh] overflow-hidden rounded-lg shadow-lg">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={Video}
            type="video/mp4"
            loop
            muted
            autoPlay
          />

          {/* Play Button in Center */}
          {/* <button
            onClick={handleTogglePlay}
            className="absolute inset-0 flex items-center justify-center  text-white text-4xl p-6 rounded-full "
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl text-center text-green-600 font-bold">
          Welcome to Our Gallery
        </h1>

        {/* Masonry Image Preview */}
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4 mt-6"
          columnClassName="masonry-column"
        >
          {previewImages.map((img, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`Preview ${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Masonry>

        {/* View More Button */}
        <div className="text-center mt-6">
          <Link to="/masonry_gallery">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700">
              View More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default VideoSection

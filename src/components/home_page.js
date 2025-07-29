import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import "./fonts.css";

// Image imports
import img1 from "../images/homePage.png";
import img2 from "../images/homePage2.png";
import img3 from "../images/homePage3.png";

const images = [img1, img2, img3];

const Home_Page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden font-sans bg-black">
      {/* Animated Image Background Layer */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`
              absolute inset-0 w-full h-full object-cover 
              transition-opacity duration-[1500ms] ease-in-out
              transform  scale-100 
              ${index === currentImageIndex ? "opacity-100 scale-105 z-0" : "opacity-0 scale-100 z-0"}
            `}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-20">
        <div className="max-w-2xl text-white space-y-6 animate-fadeIn">
          <p className="text-sm tracking-wide uppercase text-gray-300">
            Welcome to
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-green-400">
            Meghalaya State Organic <br /> Certification Body
          </h1>
          <p className="text-base text-gray-200 leading-relaxed">
            Meghalaya, an agrarian state, follows traditional organic farming
            with minimal chemical use. The MSOCB now certifies organic produce
            across Northeast and East India, promoting sustainability since
            2015.
          </p>
          <Link
            to="/about_section"
            className="no-underline inline-block px-6 py-3 bg-green-500 text-white rounded-md hover:bg-white hover:text-green-600 transition duration-300 shadow-md"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home_Page;

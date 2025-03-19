import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {" "}
        {/* Update Image Path */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <p className="text-sm uppercase">Home / Contact</p>
          <h1 className="text-3xl font-bold">Contact</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Contact Info Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-10">
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">About</h3>
            <p>
              MSOCB ensures organic certification, maintaining authenticity and
              quality, while supporting farmers in sustainable agriculture
              across Meghalaya and beyond.  
            </p>
          </div>
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p>+91 6033426943</p>
            <p>msocbinfo009@gmail.com</p>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p>Upper Shillong, 793009 6th Mile,</p>
            <p>Laitmynsaw Village</p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-10 mb-8">
          {/* Google Map Embed */}
          <div className="rounded-lg overflow-hidden shadow-md  ">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d921.7488534235648!2d91.82182575889259!3d25.54200808017961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750874387075a2f%3A0xfc4f516296b2ac4f!2sHolistic%20Wellness%20Center!5e1!3m2!1sen!2sin!4v1741603244883!5m2!1sen!2sin"
              className="w-full min-h-full"
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Write a Message</h3>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md border mb-4"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border mb-4"
              />
              <textarea
                placeholder="Write a message"
                className="w-full p-3 rounded-md border mb-4 h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage

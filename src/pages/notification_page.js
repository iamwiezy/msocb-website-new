import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
const notifications = [
  {
    title: "Organic Certification Open",
    description:
      "Farmers/growers groups can apply for NOP organic certification. Register today!",
    image:
      "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "New Accreditation",
    description:
      "MOCA is now officially accredited under NOP for third-party organic certification.",
    image:
      "https://images.pexels.com/photos/51947/tuscany-grape-field-nature-51947.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Important Update",
    description:
      "Organic exporters must ensure compliance with NPOP certification before shipment.",
    image:
      "https://images.pexels.com/photos/162240/bull-calf-heifer-ko-162240.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
]

const latestPosts = [
  "Organic Certification Open",
  "New Accreditation Available",
  "Apply for the Certification",
]
const Notification_page = () => {
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
          <p className="text-sm uppercase">Home / Notification</p>
          <h1 className="text-3xl font-bold">Notification</h1>
        </div>
      </div>
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Notifications */}
            <div className="md:col-span-2 space-y-6">
              {notifications.map((notif, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={notif.image}
                    alt={notif.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-green-700 font-semibold text-xl">
                      {notif.title}
                    </h3>
                    <p className="text-gray-700 mt-2">{notif.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
              <ul className="space-y-3">
                {latestPosts.map((post, index) => (
                  <li key={index} className="border-b pb-2 last:border-none">
                    <a href="#" className="text-green-600 hover:underline">
                      {post}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Notification_page

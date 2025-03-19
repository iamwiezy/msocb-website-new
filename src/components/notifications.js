import React from "react"
import { Link } from "gatsby"

// Define a NotificationItem component for better reusability and readability
const NotificationItem = ({ id, title, description, image }) => {
  return (
    <Link className="no-underline" to="/notification_page">
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-full max-w-xs hover:-translate-y-10 transition-transform duration-300 cursor-pointer">
        <h3 className="text-yellow-600 font-semibold">{title}</h3>
        <p className="text-gray-700 my-2">{description}</p>
        <img
          src={image}
          alt={title}
          className="w-12 h-12 mx-auto rounded-lg mt-2"
        />
      </div>{" "}
    </Link>
  )
}

const Notifications = () => {
  // Define notifications data
  const notifications = [
    {
      id: 1,
      title: "Notification 01",
      description: "Advertisement for the first post",
      image: "/images/notification-1.jpg",
    },
    {
      id: 2,
      title: "Notification 02",
      description: "Notification about who got the job",
      image: "/images/notification-2.jpg",
    },
    {
      id: 3,
      title: "Notification 03",
      description: "Notification about some other stuffs",
      image: "/images/notification-3.jpg",
    },
  ]

  return (
    <div className="relative mt-16 w-full flex flex-col md:flex-row justify-center items-center gap-6 z-10 px-4 py-4">
      {notifications.map(notification => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  )
}

export default Notifications

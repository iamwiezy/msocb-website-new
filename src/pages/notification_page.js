import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import BannerImage from "../images/banner.jpg"

const Notification_page = () => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const GRAPHQL_ENDPOINT =
    process.env.GATSBY_GRAPHQL_ENDPOINT || "http://localhost:8000/___graphql"

  const query = `
    {
      allNodeNotic {
        nodes {
          field_date
          title
          path {
            alias
          }
          relationships {
            field_upload_pdf {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `

  const fetchNotifications = async () => {
    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const result = await response.json()

      if (result.data && result.data.allNodeNotic.nodes) {
        setNotifications(result.data.allNodeNotic.nodes)
      } else {
        throw new Error("No notifications found")
      }
    } catch (error) {
      setError(`Error fetching notifications: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (notifications.length === 0) {
    return <div>No notifications found</div>
  }

  return (
    <>
      <Header />
      <Navbar />
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
      >
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
                  className="bg-white shadow-md rounded-lg overflow-hidden p-6"
                >
                  <h3 className="text-green-700 font-semibold text-xl">
                    <a
                      href={
                        notif.relationships.field_upload_pdf[0]?.localFile
                          ?.url || notif.path.alias
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {notif.title}
                    </a>
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm">
                    {notif.field_date}
                  </p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Latest Posts</h3>
              <ul className="space-y-3">
                {notifications.slice(0, 5).map((notif, index) => (
                  <li key={index} className="border-b pb-2 last:border-none">
                    <a
                      href={notif.path.alias}
                      className="text-green-600 hover:underline"
                    >
                      {notif.title}
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

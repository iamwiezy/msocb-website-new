// src/components/NotificationSidebar.js
import React, { useEffect, useState } from "react"

const NotificationSidebar = () => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const GRAPHQL_ENDPOINT =
    process.env.GATSBY_GRAPHQL_ENDPOINT || "http://localhost:8000/___graphql"

  const query = `
    {
      allNodeNotic {
        nodes {
          title
          path {
            alias
          }
        }
      }
    }
  `

  useEffect(() => {
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

        if (result.data?.allNodeNotic?.nodes) {
          setNotifications(result.data.allNodeNotic.nodes)
        } else {
          throw new Error("No notifications found")
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading notifications: {error}</div>
  if (notifications.length === 0) return <div>No notifications found</div>

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Latest Notifications</h3>
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
  )
}

export default NotificationSidebar

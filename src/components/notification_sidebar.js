import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const NotificationSidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeNotic(sort: { fields: changed, order: DESC }, limit: 5) {
        nodes {
          title
          path {
            alias
          }
        }
      }
    }
  `)

  const notifications = data.allNodeNotic.nodes

  if (!notifications || notifications.length === 0) {
    return (
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Latest Notifications</h3>
        <p className="text-gray-500">No notifications found.</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-teal-800">
        Latest Notifications
      </h3>
      <ul className="space-y-3">
        {notifications.map((notif, index) => (
          <li key={index} className="border-b pb-2 last:border-none">
            <Link
              to={notif.path.alias}
              className="text-green-700 hover:underline hover:text-green-900 transition duration-150"
            >
              {notif.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="pt-4 text-right">
        <Link
          to="/Notification"
          className="text-sm text-teal-700 font-medium hover:underline"
        >
          View All →
        </Link>
      </div>
    </div>
  )
}

export default NotificationSidebar

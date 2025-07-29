import React from "react"; // Removed useEffect, useState
import { graphql, useStaticQuery } from "gatsby"; // Import graphql and useStaticQuery
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import BannerImage from "../images/banner.jpg";
import Twitterdata from "../components/twitter";
import { FaClock } from "react-icons/fa";

const Notification_page = () => {
  // 1. Use useStaticQuery to fetch data at build time
  const data = useStaticQuery(graphql`
    query NotificationPageQuery {
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
  `);

  // 2. Access the data directly from the `data` object
  const notifications = data.allNodeNotic.nodes || [];

  // Remove loading, error states, and the fetch function, as data is available at build time
  // const [notifications, setNotifications] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const GRAPHQL_ENDPOINT = process.env.GATSBY_GRAPHQL_ENDPOINT || "http://localhost:8000/___graphql";
  // const query = `...`;
  // const fetchNotifications = async () => { ... };
  // useEffect(() => { fetchNotifications(); }, []);

  // 3. Adjust the loading/error handling, as these states are no longer needed for data fetching
  // The 'notifications.length === 0' check is still relevant if no data comes from Drupal.
  if (notifications.length === 0) {
    return (
      <>
        <Header />
        <Navbar />
        {/* Banner */}
        <div
          className="relative w-full h-60 md:h-72 bg-cover bg-center"
          style={{ backgroundImage: `url(${BannerImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
            <p className="text-sm uppercase tracking-widest">
              Home / Notification
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-1">
              Notification Board
            </h1>
          </div>
        </div>
        <section className="bg-gray-50 py-12 px-4 md:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                All Notifications
              </h2>
              <div className="text-center py-16">No notifications found.</div>
            </div>
            <aside className="space-y-6">
              <div className="bg-white p-4 rounded-xl shadow border">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  External Links
                </h3>
                <ul className="space-y-2 text-sm text-blue-700 no-underline">
                  <li>
                    <a
                      href="https://apeda.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline no-underline"
                    >
                      APEDA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pgsindia-ncof.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline no-underline"
                    >
                      PGS India
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://meghalaya.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline no-underline"
                    >
                      Meghalaya.gov.in
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-xl shadow border">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">
                  Twitter Feed
                </h3>
                <Twitterdata />
              </div>
            </aside>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Navbar />

      {/* Banner */}
      <div
        className="relative w-full h-60 md:h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <p className="text-sm uppercase tracking-widest">
            Home / Notification
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-1">
            Notification Board
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: All Notifications */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              All Notifications
            </h2>

            {notifications.map((notif, index) => (
              <div
                key={index}
                className="border-l-4 border-green-500 pl-4 bg-white rounded shadow-sm py-3 px-4 hover:shadow-md transition-all"
              >
                <a
                  href={
                    notif.relationships?.field_upload_pdf?.[0]?.localFile?.url ||
                    notif.path?.alias
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-green-700 font-medium hover:underline text-sm block"
                >
                  {notif.title.length > 100
                    ? notif.title.slice(0, 100) + "..."
                    : notif.title}
                </a>
                <div className="flex items-center gap-2 mt-1 text-gray-500 text-xs">
                  <FaClock className="text-sm" />
                  <span>{notif.field_date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <aside className="space-y-6">
            {/* External Links */}
            <div className="bg-white p-4 rounded-xl shadow border">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">
                External Links
              </h3>
              <ul className="space-y-2 text-sm text-blue-700 no-underline">
                <li>
                  <a
                    href="https://apeda.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline no-underline"
                  >
                    APEDA
                  </a>
                </li>
                <li>
                  <a
                    href="https://pgsindia-ncof.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline no-underline"
                  >
                    PGS India
                  </a>
                </li>
                <li>
                  <a
                    href="https://meghalaya.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:underline no-underline"
                  >
                    Meghalaya.gov.in
                  </a>
                </li>
              </ul>
            </div>

            {/* Twitter Feed */}
            <div className="bg-white p-4 rounded-xl shadow border">
              <h3 className="text-lg font-semibold text-teal-700 mb-3">
                Twitter Feed</h3>
              <Twitterdata />
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Notification_page;
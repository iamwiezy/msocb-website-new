import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { format } from "date-fns";

const ReactNotification = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const apiUrl = "https://be.msocb.org/jsonapi/node/notic";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        const currentDate = new Date();

        const extractedNotice = data.data.map((mynotice) => {
          const expiryDate = mynotice.attributes.field_e
            ? new Date(mynotice.attributes.field_e)
            : null;

          const isNew = expiryDate && currentDate <= expiryDate;

          return {
            id: mynotice.id,
            date: mynotice.attributes.changed,
            date1: mynotice.attributes.field_date,
            title: mynotice.attributes.title,
            alias: mynotice.attributes.path.alias,
            isNew,
          };
        });

        setNotice(extractedNotice.slice(0, 5)); // Adjust slice to control item count
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="border border-teal-700 rounded-lg shadow-lg bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-teal-800 px-4 py-3 text-white text-center">
        <h3 className="text-lg font-semibold tracking-wide">Latest Updates</h3>
      </div>

      {/* Auto-scrolling Content */}
      <div className="relative h-60 overflow-hidden">
        <div className="animate-marquee space-y-3 py-2 px-4 hover:[animation-play-state:paused]">
          {notice.length === 0 ? (
            <p className="text-gray-600 text-center">No recent notifications.</p>
          ) : (
            [...notice, ...notice].map((item, index) => (
              <Link
                to={`/notice-detail?title=${item.alias}`}
                key={`${item.id}-${index}`}
                className="block bg-teal-50 no-underline hover:bg-teal-100 border border-teal-200 px-3 py-2 rounded transition duration-200 shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm text-teal-900 font-medium leading-snug">
                    {format(new Date(item.date1), "dd-MM-yyyy")} – {item.title}
                  </p>
                  {item.isNew && (
                    <img
                      src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                      alt="New"
                      className="w-6 h-6 ml-3 animate-bounce"
                    />
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-teal-800 p-3 text-right">
        <Link
          to="/notification_page"
          className="text-white text-sm font-medium hover:underline"
        >
          View All →
        </Link>
      </div>

      {/* Animation Styling */}
      <style>
        {`
          @keyframes scrollUp {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-marquee {
            display: flex;
            flex-direction: column;
            animation: scrollUp 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default ReactNotification;

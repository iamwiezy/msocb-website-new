import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ReactNotification from "../components/ReactNotification";

const NoticeDetail = ({ location }) => {
  const searchParams = new URLSearchParams(location.search);
  const noticeAlias = searchParams.get("title");
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch("https://be.msocb.org/jsonapi/node/notic");
        const data = await response.json();

        const normalize = (str) =>
          decodeURIComponent(str || "").replace(/#.*$/, "").trim();

        const match = data.data.find(
          (n) => normalize(n.attributes.path.alias) === normalize(noticeAlias)
        );

        if (match) {
          const pdfResponse = await fetch(
            `https://be.msocb.org/jsonapi/node/notic/${match.id}/field_upload_pdf/`
          );

          const pdfs = pdfResponse.ok
            ? (await pdfResponse.json()).data.map(
                (item) => item.attributes.uri.url
              )
            : [];

          setNotice({
            id: match.id,
            title: match.attributes.title,
            date: match.attributes.field_date,
            pdfurls: pdfs,
            links: match.attributes.field_link_url || [],
          });
        } else {
          setNotice(null);
        }
      } catch (err) {
        console.error("Error fetching notice:", err);
        setNotice(null);
      }
    };

    fetchNotice();
  }, [noticeAlias]);

  return (
    <>
      <Helmet>
        <title>{notice?.title || "Notice Detail"} | MSOCB</title>
      </Helmet>

      <Header />
      <Navbar />

      <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
          {/* Main Content */}
          <div className="md:w-2/3 w-full bg-white rounded-xl shadow-md p-6 md:p-8">
            {notice ? (
              <>
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
                  {notice.title}
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                  Published on:{" "}
                  <span className="font-medium text-gray-700">
                    {new Date(notice.date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </p>

                {/* PDF Attachments */}
                {notice.pdfurls.length > 0 ? (
                  <div className="mb-6">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                      PDF Attachments
                    </h2>
                    <ul className="space-y-2">
                      {notice.pdfurls.map((url, idx) => (
                        <li key={idx}>
                          <a
                            href={`https://be.msocb.org/${url}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-teal-700 hover:text-teal-900 hover:underline transition"
                          >
                            📄 View PDF {idx + 1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="text-gray-600 mb-6">No PDFs available.</p>
                )}

                {/* External Links */}
                {notice.links.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-lg font-medium text-gray-700 mb-2">
                      External Links
                    </h2>
                    <ul className="space-y-2">
                      {notice.links.map((link, idx) => (
                        <li key={idx}>
                          <a
                            href={link.uri}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline transition"
                          >
                            🔗 {link.title || "Visit Link"}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Back Button */}
                <div className="pt-4 border-t border-gray-200 mt-8 flex justify-end">
                  <Link
                    to="/notification_page"
                    className="inline-flex items-center text-sm text-white bg-teal-700 hover:bg-teal-800 transition px-4 py-2 rounded-full font-medium"
                  >
                    ← Back to Notifications
                  </Link>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading notice details...</p>
              </div>
            )}
          </div>

          {/* Sidebar: ReactNotification */}
          <div className="md:w-1/3 w-full">
            <ReactNotification />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NoticeDetail;

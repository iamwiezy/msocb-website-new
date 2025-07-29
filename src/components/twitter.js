import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useStaticQuery, graphql, Link } from "gatsby";
import { TwitterEmbed } from "react-social-media-embed";

const Twitterdata = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeS(filter: { field_choose_platform: { eq: "twitterx" } }) {
        nodes {
          id
          field_choose_platform
          title
        }
      }
    }
  `);

  const tweets = data.allNodeS.nodes;

  return (
    <div className="mt-4 bg-white border border-teal-200 rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-teal-700 px-4 py-2 text-white flex items-center justify-between">
        <h3 className="text-sm md:text-base font-semibold tracking-wide">
          Twitter Updates
        </h3>
        <FontAwesomeIcon icon={faXTwitter} className="text-white text-lg" />
      </div>

      {/* Tweets Scrollable Section */}
      <div className="h-[360px] overflow-y-auto p-3 space-y-4 scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-gray-100">
        {tweets.length === 0 ? (
          <p className="text-gray-500 text-sm text-center mt-6">
            No recent tweets found.
          </p>
        ) : (
          tweets.map((tweet) => (
            <div key={tweet.id} className="flex justify-center">
              <TwitterEmbed url={tweet.title} width={300} />
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="bg-teal-700 px-4 py-2 text-right">
        <Link
          to="https://twitter.com/mbda_meghalaya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-medium hover:underline"
        >
          Follow us →
        </Link>
      </div>
    </div>
  );
};

export default Twitterdata;

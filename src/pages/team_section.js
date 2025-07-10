import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const GRAPHQL_ENDPOINT =
    process.env.GATSBY_GRAPHQL_ENDPOINT || "http://localhost:8000/___graphql"

  const query = `
    {
      allNodeWhoIsWho {
        nodes {
          title
          field_designation
          relationships {
            field_profile_picture {
              relationships {
                field_media_image {
                  localFile {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  const getPyramidRows = members => {
    const rows = []
    let start = 0
    let rowSize = 1

    while (start < members.length) {
      const row = members.slice(start, start + rowSize)
      rows.push(row)
      start += rowSize
      rowSize += 1
    }

    return rows
  }

  const fetchTeamData = async () => {
    try {
      const response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })

      const result = await response.json()

      if (result.data && result.data.allNodeWhoIsWho.nodes) {
        setTeamMembers(result.data.allNodeWhoIsWho.nodes)
      } else {
        throw new Error("No data found")
      }
    } catch (error) {
      setError(`Error fetching team data: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTeamData()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (teamMembers.length === 0) {
    return <div>No team members found</div>
  }

  return (
    <>
      <Header />
      <Navbar />
      <section className="py-16 bg-white text-center">
        <h3 className="text-yellow-600 font-semibold text-lg">Team Members</h3>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Meet Our Team</h2>

        <div className="mt-12 space-y-10">
          {getPyramidRows(teamMembers).map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-10 flex-wrap"
            >
              {row.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={
                      member?.relationships?.field_profile_picture
                        ?.relationships?.field_media_image?.localFile?.url || ""
                    }
                    alt={member?.title || "Team member"}
                    className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400"
                  />
                  <h4 className="mt-3 text-lg font-semibold text-gray-900">
                    {member?.title || "Unknown"}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {member?.field_designation || "Unknown"}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default TeamSection

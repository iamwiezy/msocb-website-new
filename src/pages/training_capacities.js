import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const ITEMS_PER_PAGE = 6

const TrainingCapacities = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const data = useStaticQuery(graphql`
    query {
      allNodeTraining(sort: { field_traning_date: DESC }) {
        nodes {
          title
          field_traning_date(formatString: "DD-MM-YYYY")
          path {
            alias
          }
          body {
            processed
          }
          relationships {
            field_choose_photo {
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
  `)

  const nodes = data.allNodeTraining.nodes
  const totalPages = Math.ceil(nodes.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentNodes = nodes.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Typography variant="h2" className="text-center mb-10 text-blue-gray-800">
          Training Capacities
        </Typography>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {currentNodes.map((node, index) => {
            const imgSrc =
              node.relationships.field_choose_photo?.[0]?.relationships?.field_media_image?.localFile?.url || null

            return (
              <Card
                key={index}
                className="shadow-xl rounded-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl bg-white"
              >
                <CardHeader floated={false} className="relative h-56 overflow-hidden">
                  {imgSrc ? (
                    <img
                      src={imgSrc}
                      alt="Training Image"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center text-gray-500 text-sm">
                      No Image Available
                    </div>
                  )}
                </CardHeader>

                <CardBody className="px-5 py-4">
                  <Typography variant="h6" className="mb-2 text-blue-gray-900 font-semibold">
                    {node.title}
                  </Typography>
                  <Typography className="text-sm text-gray-500">
                    {node.field_traning_date}
                  </Typography>
                </CardBody>

                <CardFooter className="px-5 pb-5">
                  <Link to={node.path.alias}>
                    <Button fullWidth className="bg-blue-600 hover:bg-blue-700">
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <Button
            variant="outlined"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4"
          >
            <ChevronLeftIcon className="h-4 w-4" /> Previous
          </Button>

          <Typography variant="h6" className="text-blue-gray-700">
            Page {currentPage} of {totalPages}
          </Typography>

          <Button
            variant="outlined"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-4"
          >
            Next <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacities

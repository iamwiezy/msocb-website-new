import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import { Link } from "gatsby"

const TrainingDetail = ({ data }) => {
  const node = data.nodeTraining
  const imgSrc =
    node.relationships.field_choose_photo?.[0]?.relationships?.field_media_image?.localFile?.url || null

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <Typography
          variant="h3"
          color="blue-gray"
          className="text-center mb-8"
        >
          Training Detail
        </Typography>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          {/* Header Image */}
          {imgSrc && (
            <CardHeader className="bg-white p-0">
              <img
                src={imgSrc}
                alt={node.title || "Training Image"}
                className="w-full h-auto object-contain"
              />
            </CardHeader>
          )}

          {/* Title + Date + Body */}
          <CardBody className="p-6 space-y-4">
            <Typography
              variant="h4"
              color="blue-gray"
              className="text-left font-bold"
            >
              {node.title}
            </Typography>

            {node.field_traning_date && (
              <Typography
                variant="small"
                className="text-left uppercase text-sm text-gray-500"
              >
                {node.field_traning_date}
              </Typography>
            )}

            <div
              className="prose prose-blue max-w-none mx-auto pt-4 text-base text-justify"
              dangerouslySetInnerHTML={{ __html: node.body.processed }}
            />
          </CardBody>

          
        </Card>
      </div>
      <Footer />
    </>
  )
}

export default TrainingDetail

export const query = graphql`
  query ($id: String!) {
    nodeTraining(id: { eq: $id }) {
      id
      title
      body {
        processed
      }
      field_traning_date(formatString: "DD-MM-YYYY")
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
`

import React, { useState } from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { Link } from "gatsby"

import TrainingCapacity1 from "../images/training-capacity-1.jpg"
import TrainingCapacity2 from "../images/training-capacity-2.jpg"
import TrainingCapacity3 from "../images/training-capacity-3.jpg"
import TrainingCapacity4 from "../images/training-capacity-4.jpg"
import TrainingCapacity5 from "../images/training-capacity-5.jpg"
import TrainingCapacity6 from "../images/training-capacity-6.jpg"
import TrainingCapacity7 from "../images/training-capacity-7.jpg"
import TrainingCapacity8 from "../images/training-capacity-8.jpg"
import TrainingCapacity9 from "../images/training-capacity-9.jpg"

const cardsData = [
  {
    description:
      "Training on Organic Certification Standards organized by Directorate of Horticulture, Meghalaya, Shillong from 5th- 7th June 2024",
    imgSrc: TrainingCapacity1,
  },
  {
    description:
      "Training on Sampling Procedures organized by MSOCB from 16th-17th April 2024",
    imgSrc: TrainingCapacity2,
  },
  {
    description:
      "Training and Capacity Building of the staff in the Meghalaya State Organic Certification Body (MSOCB)",
    imgSrc: TrainingCapacity3,
  },
  {
    description:
      "5 days training conducted by Indian Institute of Plantation Management (IIPM), Bengaluru at BRDC, Upper Shillong from 1st to 5th March 2022",
    imgSrc: TrainingCapacity4,
  },
  {
    description:
      "6-days mock field training programme on inspection for individual farmer, farmer groups (Internal Control System-ICS group) and wild collection area conducted by Shri Dorairaj, Consultant Organic Certification held from 13th - 18th June, 2022",
    imgSrc: TrainingCapacity5,
  },
  {
    description:
      "Mock field training programme on inspection for Internal Control System-ICS group) conducted by the team from MSOCB under the facilitation of Directorate of Horticulture, Government of Meghalaya which was held on the 12th March, 2024",
    imgSrc: TrainingCapacity6,
  },
  {
    description:
      "Mock field Training programme on inspection for Internal Control System-ICS Group) conducted by the Team from MSOCB under the supervision of Shri Dorairaj K., Consultant Organic certification on the 15th March 2024",
    imgSrc: TrainingCapacity7,
  },
  {
    description:
      "Training on TraceNet operations and the training encompasses the step for Registration of operators under the different categories under crop production as per NPOP conducted by Mr. Dorairaj K (Consultant Organic Farming) engaged by MSOCB on the 16th March 2024",
    imgSrc: TrainingCapacity8,
  },
  {
    description:
      "Exposure Visit of MSOCB Team to KSOCA from 27th November 2023 to 1st December 2023",
    imgSrc: TrainingCapacity9,
  },
]

const ITEMS_PER_PAGE = 6

const TrainingCapacities = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(cardsData.length / ITEMS_PER_PAGE)

  // Get the cards for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentCards = cardsData.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  return (
    <>
      <Header />
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <Typography variant="h3" color="blue-gray" className="text-center mb-8">
          Training Capacities
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentCards.map((card, index) => (
            <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
              <CardHeader className="relative h-56">
                <img
                  src={card.imgSrc}
                  alt="card-image"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardBody className="p-4">
                <Typography className="text-gray-600 text-base">
                  {card.description}
                </Typography>
              </CardBody>
              <CardFooter className="p-4 pt-0">
                <Link
                  to={`/training-capacity-${startIndex + index + 1}`}
                  key={startIndex + index}
                >
                  <Button className="w-full">Read More</Button>
                </Link>{" "}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2"
          >
            Previous
          </Button>
          <Typography variant="h6" className="flex items-center">
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2"
          >
            Next
          </Button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacities

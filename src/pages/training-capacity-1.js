import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import TrainingCapacityPic1 from "../images/training-capacity-1.jpg"

const TrainingCapacity1 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold">
          Training on Organic Certification Standards organized by Directorate
          of Horticulture, Meghalaya, Shillong from 5th- 7th June 2024
        </h1>
        <img
          src={TrainingCapacityPic1}
          alt="Service 1"
          className="w-full h-60 object-cover rounded-lg"
        />
        <p className="mt-4 text-base">
          A three-day training on "Organic Certification Standards" was
          organized by Directorate of Horticulture, Meghalaya, at Integrated
          Agriculture Training Centre, Upper Shillong. Shri. M. L Suiam
          (Director, MAMETI) led the program, with Smt. B. Mylliemngap (DDH)
          giving the welcome speech and Mr. More discussing NPOP's founding
          principles under APEDA.
        </p>
        <p className="text-xl text-green-600 font-bold">Resource Person:</p>
        <p className="mt-4 text-base">
          Shri. Prasad More, Product Head- Organic & Lead Auditor, Food Chain
          ID, India Shri. Dhananjay Kumar, Senior Inspector Organic, Food Chain
          ID, India
        </p>
        <p className="mt-4 text-base">
          <span className="text-green-600 font-bold">DAY 1:</span> Organic Crop
          Production was thoroughly explained involving participants in a
          detailed discussion about Crop Production Plans, Conversion
          Requirements, Duration of Conversion Periods, Landscape
          considerations, crop selection, Diversity in Crop Production, and
          comprehensive Management Plans for pests, diseases, and weeds.
          Furthermore, Mr. More discussed Contamination Control, Soil and Water
          Conservation measures, Collection of Non-Cultivated Materials for
          plant origin, forest produce and also explained the guidelines for
          fertilization, pest management and evaluation of inputs for organic
          agriculture. The day ended with a Q&A session to clarify doubts and
          deepen participants' understanding of organic certification standards
          and compliance.
        </p>
        <p className="mt-4 text-base">
          <span className="text-green-600 font-bold">DAY 2:</span> On Day two
          (2) of the training session, a recap was conducted, including clearing
          doubts from the participants. The resource person initially focused on
          Grower Group certification and introduced IFOAM, the first movement
          for developing organic standards founded in 1972. Additionally, the
          Constitution of the ICS was discussed, covering its general principles
          and outlining possible options for Project structure, along with their
          advantages and disadvantages. Concerning the Constitution of the ICS,
          legal status is necessary for the group to implement procedures to
          maintain the ICS, with responsibilities assigned to individual members
          for specific activities. Moreover, the process for developing the ICS,
          the roles of the ICS Manager, Approval Committee, and other key
          positions within the ICS were elaborated. The registration process for
          new farmers was explained, including the ICS Application form, Farmer
          Contract, Sanction Format, and Internal Inspection Checklist. A video
          on Trustea was shown highlighted tea production and sustainability.
          The session aimed to provide participants with a full understanding of
          certification requirements, technical aspects of tea production, and
          sustainable practices in the industry.
        </p>
        <p className="mt-4 text-base">
          <span className="text-green-600 font-bold">DAY 3:</span> Session
          started with a thorough review of course material to confirm
          understanding and clarify doubts. Moving on to Chapter 3, Appendix 5
          on Organic Food Processing, the instructor detailed standard
          specifications. The Key topics discussed were Pest and Diseases
          control, Ingredients, Processing Methods, Packaging and Labelling
          requirements, Processed Products, Storage and Transport and Food
          additives. Annex 1 (a), Annex 1 (b), and Annex 2 were reviewed
          thoroughly, covering Food additives, processing aids, and approved
          products for packaging, providing a comprehensive understanding of
          organic food processing regulations. In addition to discussing organic
          certification standards, Mr. More explained TraceNet, Traceability,
          and Mass Balance systems, emphasizing their importance in ensuring
          transparency and accountability in the organic supply chain. A brief
          introductory information on EU certification, USDA- NOP was also
          disseminated to the participants during the training. The event ended
          with a vote of thanks from Smt. D. Barishisha Mukhim (AMO),
          Directorate of Horticulture, thanking all stakeholders for their
          support in the training program. This showed teamwork in promoting
          organic farming in Meghalaya.
        </p>
      </div>
      <Footer />
    </>
  )
}

export default TrainingCapacity1

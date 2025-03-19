import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ReactFlow, { MiniMap, Controls, Background } from "reactflow"
import "reactflow/dist/style.css"

const nodes = [
  {
    id: "1",
    type: "input",
    data: { label: "CHIEF EXECUTIVE OFFICER (MSOCB)" },
    position: { x: 500, y: 50 },
  },
  {
    id: "2",
    data: { label: "ACCOUNTS & ADMIN OFFICERS" },
    position: { x: 200, y: 150 },
  },
  {
    id: "3",
    data: { label: "QUALITY MANAGER" },
    position: { x: 500, y: 150 },
  },
  {
    id: "4",
    data: { label: "COMMITTEE (5)" },
    position: { x: 800, y: 150 },
  },
  {
    id: "5",
    data: { label: "EVALUATORS" },
    position: { x: 500, y: 250 },
  },
  {
    id: "6",
    data: { label: "FIELD INSPECTOR / AUDITORS" },
    position: { x: 500, y: 350 },
  },
  // New Committee Members
  {
    id: "7",
    data: { label: "Technical Committee" },
    position: { x: 700, y: 250 },
  },
  {
    id: "8",
    data: { label: "Certification Committee" },
    position: { x: 850, y: 250 },
  },
  {
    id: "9",
    data: { label: "Appeal Committee" },
    position: { x: 1000, y: 250 },
  },
  {
    id: "10",
    data: { label: "Impartiality Committee" },
    position: { x: 1150, y: 250 },
  },
  {
    id: "11",
    data: { label: "Advisory Committee" },
    position: { x: 1300, y: 250 },
  },
]

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e1-4", source: "1", target: "4", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true },
  { id: "e5-6", source: "5", target: "6", animated: true },
  // Connecting Committee Members to Committee (5)
  { id: "e4-7", source: "4", target: "7", animated: true },
  { id: "e4-8", source: "4", target: "8", animated: true },
  { id: "e4-9", source: "4", target: "9", animated: true },
  { id: "e4-10", source: "4", target: "10", animated: true },
  { id: "e4-11", source: "4", target: "11", animated: true },
]

const Organizational_structure = () => {
  return (
    <>
      <Header />
      <Navbar />
      <h1 className="text-4xl text-center text-green-600 font-bold mb-6 mt-6 uppercase">
        MSOCB Organizational Structure
      </h1>
      <div className="w-full h-[600px]">
        <ReactFlow nodes={nodes} edges={edges}>
          <MiniMap className="bg-gray-200" />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
      <Footer />
    </>
  )
}

export default Organizational_structure

import React from "react"

const Modal = ({ open }) => {
  if (!open) return null
  return (
    <div>
      <div className="modalContainer">
        <img src="/images/gal-1.jpg" alt="" />
      </div>
    </div>
  )
}

export default Modal

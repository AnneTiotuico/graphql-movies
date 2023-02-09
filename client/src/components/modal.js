// import { useState } from 'react';

export default function Modal({ onViewModal, selectedCard }) {
  

  // how do we get data from the card that we clicked?

  return (
    <div className="modal-container" onClick={onViewModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        this is a modal! id: {JSON.stringify(selectedCard)}
      </div>
    </div>
  )
}
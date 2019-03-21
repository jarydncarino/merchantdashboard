import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root')

function Modal({merchantID, showModal, handleCloseModal, deleteMerchant}) {
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
        }
    };
  return (
    <ReactModal 
        isOpen={showModal}
        contentLabel="Delete Merchant"
        style={customStyles}
        onRequestClose={handleCloseModal}
        overlayClassName="Overlay"
        >
        <span>{merchantID}</span>
        <h3>Delete Merchant</h3>
        <p>Are you sure you want to delete this merchant?</p>
        <div className="button-wrap">
            <button className="btn btn-secondary" onClick={handleCloseModal}>No</button>
            <button className="btn btn-primary" onClick={() => {deleteMerchant(merchantID); handleCloseModal()}}>Yes</button>
        </div>
    </ReactModal>
  )
}

export default Modal;
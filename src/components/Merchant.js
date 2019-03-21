import React from 'react';
import ReactModal from 'react-modal';

function Merchant({merchants, showModal, deleteMerchant, handleOpenModal, handleCloseModal}) {
    
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

    const merchantList = merchants.length ? (
        merchants.map(merchant => {
            return (
                <li className="merchant-item" key={merchant.id}>
                    <span>{merchant.name}</span>
                    <div className="action-btns">
                        <a href="/"><i className="material-icons">edit</i></a>
                        <a href="/" onClick={handleOpenModal}><i className="material-icons">delete</i></a>
                    </div>
                    <ReactModal 
                        isOpen={showModal}
                        contentLabel="Delete Merchant"
                        style={customStyles}
                        onRequestClose={handleCloseModal}
                        overlayClassName="Overlay"
                        >
                        <span>{merchant.id}</span>
                        <h3>Delete Merchant</h3>
                        <p>Are you sure you want to delete this merchant?</p>
                        <div className="button-wrap">
                            <button className="btn btn-secondary" onClick={handleCloseModal}>No</button>
                            <button className="btn btn-primary" onClick={() => {deleteMerchant(merchant.id); handleCloseModal()}}>Yes</button>
                        </div>
                    </ReactModal>
                </li>
            )
        })
    ) : (
        <p className="center">No data available</p>
    )
    return (
        <ul className="merchant">
            { merchantList }
        </ul>
    )
}

export default Merchant;
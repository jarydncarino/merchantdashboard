import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

class MerchantListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModal2: false,
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal = e => {
        e.preventDefault();
        this.setState({ 
            showModal: true 
        });
    }
    
    handleCloseModal = e => {
        this.setState({ 
            showModal: false 
        });
    }
    
    render() {
        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        }

        return (
            <li className="merchant-item">
                <span>{this.props.name}</span>
                <div className="action-btns">
                    <Link to={{pathname: '/editMerchant', state: { merchantItem: this.props.param } }}><i className="material-icons">edit</i></Link>
                    <a href="/" onClick={this.handleOpenModal}><i className="material-icons">delete</i></a>
                </div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Delete Merchant"
                    style={customStyles}
                    onRequestClose={this.handleCloseModal}
                    overlayClassName="Overlay"
                    >
                    <h3>Delete Merchant</h3>
                    <p>Are you sure you want to delete this merchant?</p>
                    <div className="button-wrap">
                        <button className="btn btn-secondary" onClick={this.handleCloseModal}>No</button>
                        <button className="btn btn-primary" onClick={() => {this.props.deleteMerchant(this.props.id); this.handleCloseModal()}}>Yes</button>
                    </div>
                </ReactModal>
            </li>
            
        )
    }
}

export default MerchantListItem;
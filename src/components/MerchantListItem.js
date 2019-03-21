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
        this.handleOpenModal2 = this.handleOpenModal2.bind(this);
        this.handleCloseModal2 = this.handleCloseModal2.bind(this);
    }

    handleOpenModal (e) {
        e.preventDefault();
        this.setState({ showModal: true });
    }
    
    handleCloseModal (e) {
        this.setState({ showModal: false });
    }

    handleOpenModal2 (e) {
        e.preventDefault();
        this.setState({ showModal2: true });
    }
    
    handleCloseModal2 (e) {
        this.setState({ showModal2: false });
    }
    
    render() {
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
            <div>
                <li className="merchant-item">
                    <span><a href="/" onClick={this.handleOpenModal2}>{this.props.name}</a></span>
                    <div className="action-btns">
                        <Link to={{pathname: '/editMerchant', state: { merchantId: this.props.id } }}><i className="material-icons">edit</i></Link>
                        <a href="/" onClick={this.handleOpenModal}><i className="material-icons">delete</i></a>
                    </div>
                </li>
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
                <ReactModal 
                    isOpen={this.state.showModal2}
                    contentLabel="Delete Merchant"
                    style={customStyles}
                    onRequestClose={this.handleCloseModal2}
                    overlayClassName="Overlay"
                    >
                    <h3>{this.props.name}</h3>
                    <p>Box: {this.props.box}</p>
                    <p>Oversized: {this.props.oversized}</p>
                    <p>Big Pouch: {this.props.bigPouch}</p>
                    <p>Small Pouch: {this.props.smallPouch}</p>
                    <div className="button-wrap">
                        <button className="btn btn-secondary" onClick={this.handleCloseModal2}>Close</button>
                    </div>
                </ReactModal>
            </div>
            
        )
    }
}

export default MerchantListItem;
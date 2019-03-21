import React, { Component } from 'react';
import Merchant from './Merchant';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (e) {
        e.preventDefault();
        this.setState({ showModal: true });
    }
    
    handleCloseModal (e) {
        this.setState({ showModal: false });
    }

    deleteMerchant = (id) => {
        const merchants = this.state.merchants.filter(merchant => {
            return merchant.id !== id
        });
        this.setState({
            merchants: merchants
        });
    }

    render() {
        console.log(this.props)
        return (
            <div className="white-container">
                <div className="title-wrap">
                    <h1>List of Merchants</h1>
                    <Link to='/addMerchant' className="btn btn-primary add-merchant"><i className="material-icons">add_circle</i>Add Merchant</Link>
                </div>
                <Merchant merchants={this.props.merchants} deleteMerchant={this.deleteMerchant} showModal={this.state.showModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal}/>

            </div>
        )
    }
}

export default Dashboard;

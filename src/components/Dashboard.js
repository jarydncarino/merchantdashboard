import React, { Component } from 'react';
import Merchant from './Merchant';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="white-container">
                <div className="title-wrap">
                    <h1>List of Merchants</h1>
                    <Link to='/addMerchant' className="btn btn-primary add-merchant"><i className="material-icons">add_circle</i>Add Merchant</Link>
                </div>
                <Merchant merchants={this.props.merchants} deleteMerchant={this.props.deleteMerchant} searchString={this.props.searchString}/>

            </div>
        )
    }
}

export default Dashboard;

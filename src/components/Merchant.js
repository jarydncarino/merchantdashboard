import React, { Component } from 'react';
import MerchantListItem from './MerchantListItem';

class Merchant extends Component {
    
    
    render() {
        let merchants = this.props.merchants,
            searchString = this.props.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            merchants = merchants.filter(i => {
                return i.name.toLowerCase().match( searchString );
            });
        }

        const merchantList = this.props.merchants.length ? (
            merchants.map(merchant => {
                return (
                    <MerchantListItem key={merchant.id} id={merchant.id} name={merchant.name} deleteMerchant={this.props.deleteMerchant} editMerchant={this.props.editMerchant} param={merchant}/>
                )
            })
        ) : (
            <p className="center">No data available</p>
        )
        return (
            <div>
            <ul className="merchant">
                { merchantList }
            </ul>
            </div>
        )
    }
    
}

export default Merchant;
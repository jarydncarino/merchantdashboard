import React, { Component } from 'react';
import MerchantListItem from './MerchantListItem';

class Merchant extends Component {
    
    constructor(props) {
        super(props);
        this.state = { searchString: '' }
    }
    
    handleChange = (e) => {
        this.setState({ searchString:e.target.value });
    }

    
    
    render() {
        var merchants = this.props.merchants,
            searchString = this.state.searchString.trim().toLowerCase();
        if (searchString.length > 0) {
            merchants = merchants.filter(function(i) {
                return i.name.toLowerCase().match( searchString );
            });
        }
        const merchantList = this.props.merchants.length ? (
            merchants.map(merchant => {
                return (
                    <MerchantListItem key={merchant.id} id={merchant.id} name={merchant.name} metro={merchant.metro} intra={merchant.intra} provincial={merchant.provincial} box={merchant.box} oversized={merchant.oversized} bigPouch={merchant.bigPouch} smallPouch={merchant.smallPouch} deleteMerchant={this.props.deleteMerchant} editMerchant={this.props.editMerchant}/>
                )
            })
        ) : (
            <p className="center">No data available</p>
        )
        return (
            <div>
            <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here..."/>
            <ul className="merchant">
                { merchantList }
            </ul>
            </div>
        )
    }
    
}

export default Merchant;
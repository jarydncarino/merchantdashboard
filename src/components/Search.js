import React, { Component } from 'react'

class Search extends Component {   
    
    render() {
        return (
            <div className="search-bar">
                <input type="text" value={this.props.searchString} onChange={this.props.handleSearch} placeholder="Search"/>
            </div>
        )
    }
}

export default Search;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FloatingLabel from 'floating-label-react';

class AddMerchant extends Component {

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addMerchant(this.state);
        this.props.history.push('/');
    }

  render() {
    return (
        <div className="white-container">
            <div className="title-wrap">
                <h1>Add Merchant</h1>   
            </div>    
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <FloatingLabel
                        id='name'
                        name='name'
                        placeholder='Merchant Name'
                        type='text'
                        onChange={this.handleChange}
                        />
                </div>     
                <button type="submit" className="btn btn-primary">Submit</button>       
            </form> 
        </div>
    )
  }
}

export default withRouter(AddMerchant);

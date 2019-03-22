import React, { Component } from 'react';
import FloatingLabel from 'floating-label-react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody
} from 'react-accessible-accordion';

class EditMerchant extends Component {

    constructor(props) {
        super(props);
        this.merchantItem = props.param.location.state.merchantItem;
    }

    handleChange = e => {
        let merchantItem = this.merchantItem;
        let name = e.target.id;
        let value = e.target.value;

        this.merchantItem[name] = value;

        this.setState({
            merchantItem
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.param.history.push('/');
    }

    render() {
        return (
            <div className="white-container">
                <div className="title-wrap">
                    <h1>Edit Merchant</h1>   
                </div>    
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-6">
                            <FloatingLabel
                                id='name'
                                name='name'
                                placeholder='Merchant Name'
                                type='text'
                                onChange={this.handleChange}
                                value={this.merchantItem.name}
                                />
                        </div>
                    </div> 
                    <label htmlFor="shipping-fee">Shipping Fee</label>
                    <Accordion>
                        <AccordionItem expanded="true">
                            <AccordionItemTitle>
                                <h4>Metro Manila</h4>
                                <div className="accordion__arrow" role="presentation"></div>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <div className="col-6">
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='metroBox'
                                            name='metroBox'
                                            placeholder='Box'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.metroBox}
                                            />
                                    </div>    
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='metroBigPouch'
                                            name='metroBigPouch'
                                            placeholder='Big Pouch'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.metroBigPouch}
                                            />
                                    </div>    
                                </div>  
                                <div className="col-6">
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='metroOversized'
                                            name='metroOversized'
                                            placeholder='Oversized'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.metroOversized}
                                            />
                                    </div>    
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='metroSmallPouch'
                                            name='metroSmallPouch'
                                            placeholder='Small Pouch'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.metroSmallPouch}
                                            />
                                    </div>    
                                </div> 
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h4>Provincial</h4>
                                <div className="accordion__arrow" role="presentation"></div>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                            <div className="col-6">
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='provincialBox'
                                            name='provincialBox'
                                            placeholder='Box'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.provincialBox}
                                            />
                                    </div>    
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='provincialBigPouch'
                                            name='provincialBigPouch'
                                            placeholder='Big Pouch'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.provincialBigPouch}
                                            />
                                    </div>    
                                </div>  
                                <div className="col-6">
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='provincialOversized'
                                            name='provincialOversized'
                                            placeholder='Oversized'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.provincialOversized}
                                            />
                                    </div>    
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='provincialSmallPouch'
                                            name='provincialSmallPouch'
                                            placeholder='Small Pouch'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.provincialSmallPouch}
                                            />
                                    </div>    
                                </div> 
                            </AccordionItemBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionItemTitle>
                                <h4>Intra Provincial</h4>
                                <div className="accordion__arrow" role="presentation"></div>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                            <div className="col-6">
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='intraBox'
                                            name='intraBox'
                                            placeholder='Box'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.intraBox}
                                            />
                                    </div>    
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='intraBigPouch'
                                            name='intraBigPouch'
                                            placeholder='Big Pouch'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.intraBigPouch}
                                            />
                                    </div>    
                                </div>  
                                <div className="col-6">
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='intraOversized'
                                            name='intraOversized'
                                            placeholder='Oversized'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.intraOversized}
                                            />
                                    </div>    
                                    <div className="form-group">
                                        <FloatingLabel
                                            id='intraSmallPouch'
                                            name='intraSmallPouch'
                                            placeholder='Small Pouch'
                                            type='text'
                                            onChange={this.handleChange}
                                            value={this.merchantItem.intraSmallPouch}
                                            />
                                    </div>    
                                </div> 
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>                  
                    <button type="submit" className="btn btn-primary">Submit</button>       
                </form> 
            </div>
        )
    }
}

export default EditMerchant;
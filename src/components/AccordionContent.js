import React from 'react';
import FloatingLabel from 'floating-label-react';

function AccordionContent(handleChange) {
  return (
    <div>
        <div className="col-6">
            <div className="form-group">
                <FloatingLabel
                    id='box'
                    name='box'
                    placeholder='Box'
                    type='text'
                    onChange={handleChange}
                    />
            </div>    
            <div className="form-group">
                <FloatingLabel
                    id='bigPouch'
                    name='bigPouch'
                    placeholder='Big Pouch'
                    type='text'
                    onChange={handleChange}
                    />
            </div>    
        </div>  
        <div className="col-6">
            <div className="form-group">
                <FloatingLabel
                    id='oversized'
                    name='oversized'
                    placeholder='Oversized'
                    type='text'
                    onChange={handleChange}
                    />
            </div>    
            <div className="form-group">
                <FloatingLabel
                    id='smallPouch'
                    name='smallPouch'
                    placeholder='Small Pouch'
                    type='text'
                    onChange={handleChange}
                    />
            </div>    
        </div>  
    </div>
  )
}

export default AccordionContent;

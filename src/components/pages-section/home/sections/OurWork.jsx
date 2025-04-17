 import React from 'react'
 import TextMedia from '../../../ui/TextMedia';
 
 const OurWorkSection = ({props}) => {
    return (
        <section className="or-wrk-wy-sec bg-light">
            <div className="or-wrk-wy-box container-fluid">
                <TextMedia props={props} />
            </div>
        </section>
    );
};
 
 export default OurWorkSection
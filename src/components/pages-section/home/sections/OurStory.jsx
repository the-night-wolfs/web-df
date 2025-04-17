import React from 'react'
import TextMedia from '../../../ui/TextMedia';
const OurStorySection = ({props}) => {
    return (
        <section className="or-wrk-wy-sec bg-light">
            <div className="or-wrk-wy-box container-fluid">
                <TextMedia props={props}/>
            </div>
        </section>
    );
};

export default OurStorySection
import React from 'react'

const TextMedia = ({props}) => {
    return (
        <div className="container content-section py-4 py-lg-5">
            <div className="row align-items-center g-4 g-lg-5">
                <div className="col-md-5 image-container">
                    <img src={props.image}
                        alt="Team collaboration meeting" className="img-fluid w-100 h-auto" loading="lazy"
                        style={{ objectFit: "cover", minHeight: "300px" }} />
                </div>
                <div className="col-md-7 text-container">
                    <h2 className="fw-bold mb-3" style={{ fontSize: "1.8rem", lineHeight: "1.3" }}>{props.heading}</h2>
                    <div className="content-flow">
                        <p className="mb-3" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                            {props.paraq}
                        </p>
                        <p className="mb-0" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                            {props.paraw}
                        </p>
                    </div>
                    {
                       props.btn?<a href={props.btnlink} className="btn btn-primary mt-3 px-4 py-2" style={{ fontSize: "1rem" }}>{props.btncont}</a>:''
                    }

                </div>
            </div>
        </div>
    );
};

export default TextMedia
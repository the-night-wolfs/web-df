import React from "react";

const TextMedia = ({ props, id }) => {
  const content = props.find((item) => item.id === id);

  if (!content) {
    return <div>Content not found</div>; // or handle the error case appropriately
  }

  return (
    <div className="container content-section py-4 py-lg-5">
      <div className="row align-items-center g-4 g-lg-5">
        <div className="col-md-5 image-container">
          <img
            src={content.image}
            alt="Team collaboration meeting"
            className="img-fluid w-100 h-auto"
            loading="lazy"
            style={{ objectFit: "cover", minHeight: "300px" }}
          />
        </div>
        <div className="col-md-7 text-container">
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "1.8rem", lineHeight: "1.3" }}
          >
            {content.heading}
          </h2>
          <div className="content-flow">
            {content.paragraphs.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </div>
          {content.btn ? (
            <a
              href={content.btnlink}
              className="btn btn-primary mt-3 px-4 py-2"
              style={{ fontSize: "1rem" }}
            >
              {content.btncont}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default TextMedia;

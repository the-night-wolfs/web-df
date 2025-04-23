import React from "react";

const Team_identity = ({ details }) => {
  return (
    <div>
      <div className="volunteer-card flex-shrink-0">
        <div className="card border-0 shadow-sm h-100">
          <div className="card-body text-center p-4">
            <div className="user-picture mx-auto mb-3">
              <img
                src={details.image}
                alt={details.name}
                className="img-fluid rounded-circle"
                width="100"
                height="100"
              />
            </div>
            <h5 className="fw-bold mb-1">{details.name}</h5>
            <p className="text-muted small mb-3">{details.role}</p>
            <p className="mb-3">{details.bio}</p>
            <div className="social-links d-flex justify-content-center gap-2">
              {details.social.map((platform, i) => (
                <a key={i} href="#" className="text-primary">
                  <i className={`bi bi-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team_identity;

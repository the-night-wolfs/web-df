import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Page Not Found | Your App Name";
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-graphic">
          <div className="error-number">
            <span className="digit">4</span>
            <span className="digit">0</span>
            <span className="digit">4</span>
          </div>
          <div className="error-illustration">
            <div className="astronaut">
              <div className="helmet"></div>
              <div className="body"></div>
            </div>
          </div>
        </div>
        
        <h1>Lost in Space?</h1>
        <p className="subtitle">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Don't worry, we'll help you find your way back!
        </p>
        
        <div className="action-buttons">
          <button 
            onClick={() => navigate(-1)} 
            className="back-button"
          >
            ← Go Back
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="home-button"
          >
            Take Me Home
          </button>
        </div>
        
        <div className="search-container">
          <p>Or try searching:</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search our site..." 
            />
            <button className="search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
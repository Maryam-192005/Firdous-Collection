import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="overlay">
        <div className="content">
          <h1 className="welcome-text">Welcome to <span>Firdous Collection</span></h1>
          <p className="subtext">Elegance | Tradition | Style</p>

         <Button className="shop-now-btn" onClick={() => navigate('/products')}>
      Shop Now
    </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;

// src/components/LandingPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const API_KEY = 'eA73jYL14TQP4IOWAMUNCfY5bDWIcG34uPFBBjk99AUias1Ier9tYcXs';

function LandingPage() {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Fetch a background image from Pexels API
    const fetchBackgroundImage = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/search?query=plant&per_page=1', {
          headers: {
            Authorization: API_KEY,
          },
        });
        const imageUrl = response.data.photos[0]?.src?.original || '/images/default-plant.jpg';
        setBackgroundImage(imageUrl);
      } catch (error) {
        console.error('Error fetching background image:', error);
        setBackgroundImage('/images/default-plant.jpg'); // Fallback image
      }
    };

    fetchBackgroundImage();
  }, []);

  return (
    <div
    className="landing-page d-flex align-items-center"
    style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-12 text-center">
          <h1 className="display-3 text-white">Welcome to Paradise Nursery</h1>
          <p className="lead text-white">Explore our wide variety of houseplants to bring life into your home.</p>
        
            <button className="btn btn-primary btn-lg mt-3">
            <Link className="nav-link" to="/products">Get Started</Link>
            </button>
          
          
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default LandingPage;

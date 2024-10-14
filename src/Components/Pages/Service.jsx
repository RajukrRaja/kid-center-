import React from 'react';
import './Service.css';

import apolloImage from '../Images/apollo.ddfc8482.png';
import avizvaImage from '../Images/AVIZVA.png';
import barclaysImage from '../Images/BarclaysLogo.9fb34a3c.png';

function Service() {
  return (
    <div>
      <div className="service_container">
        <h1>Our Student Work at </h1>

        {/* Use imported image variables */}
        <img src={apolloImage} alt="Apollo" />
        <img src={avizvaImage} alt="Avizva" />
        <img src={barclaysImage} alt="Barclays" />
      </div>
    </div>
  );
}

export default Service;

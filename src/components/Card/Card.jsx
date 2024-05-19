import React from 'react';
import './Card.css';

function Card({ count, status, color }) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-count">{count}</div>
        {/* <div className="card-chart" style={{ borderColor: color }}></div> */}
        <div className="card-chart" style={{ backgroundImage: `conic-gradient(${color} 0% 25%, #d8e2f3 25% 100%)` }}>
            <div class = "circle"></div>
        </div>
      </div>
      <div className="card-status">{status}</div>
    </div>
  );
}

export default Card;

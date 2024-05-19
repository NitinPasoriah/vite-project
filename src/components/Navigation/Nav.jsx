import React from 'react';
import './Nav.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <span>Dashboard</span>
        </li>
        <li>
          {/* <span className="nav-icon">👥</span> */}
          <span>Employee</span>
          <ul>
            <li>
              <span>Manage Faculty (Teaching)</span>
            </li>
            <li>
              <span>Manage Faculty (Non-Teaching)</span>
            </li>
            <li>
              <span>Department</span>
            </li>
          </ul>
        </li>
        <li>
          <span>All Publication</span>
        </li>
        <li>
          <span>All Research Projects</span>
        </li>
        <li>
          <span>All Patents &amp; Awards</span>
        </li>
        <li>
          <span>Infrastructure</span>
        </li>
        <li>
          <span>Helpdesk</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
import React from 'react';
import './Nav.css'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <span className="nav-icon">📊</span>
          <span>Dashboard</span>
        </li>
        <li>
          <span className="nav-icon">👥</span>
          <span>Employee</span>
          <ul>
            <li>
              <span className="sub-nav-icon">👩‍💻</span>
              <span>Manage Faculty (Teaching)</span>
            </li>
            <li>
              <span className="sub-nav-icon">👨‍🏫</span>
              <span>Manage Faculty (Non-Teaching)</span>
            </li>
            <li>
              <span className="sub-nav-icon">🏢</span>
              <span>Department</span>
            </li>
          </ul>
        </li>
        <li>
          <span className="nav-icon">📚</span>
          <span>All Publication</span>
        </li>
        <li>
          <span className="nav-icon">📈</span>
          <span>All Research Projects</span>
        </li>
        <li>
          <span className="nav-icon">🏆</span>
          <span>All Patents &amp; Awards</span>
        </li>
        <li>
          <span className="nav-icon">🏗️</span>
          <span>Infrastructure</span>
        </li>
        <li>
          <span className="nav-icon">💻</span>
          <span>Helpdesk</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
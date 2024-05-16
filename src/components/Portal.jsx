import React from 'react';
import Header from './Header/Header.jsx';
import Navigation from './Navigation/Nav.jsx'
import './Portal.css'

class Page extends React.Component {
  render() {
    return (
      <div class = "page">
        <Header />
        <div class = "landing">
          <Navigation />
        </div>
      </div>
    );
  }
};

export default Page;
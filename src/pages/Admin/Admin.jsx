import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Navigation from '../../components/Navigation/Nav.jsx'
import Landing from '../../components/Landing/Landing.jsx'
import RightSideBar from '../../components/RightSideBar/RightSideBar.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Admin.css'

class Page extends React.Component {
  render() {
    return (
      <div className="admin-page">
        <div class = "header">
          <Header />
        </div>
        <div class = "nav">
          <div class = "leftside-bar">
            <Navigation />
          </div>
          <div class ="landing">
            <Landing />
          </div>
          <div class = "rightside-bar">
            <RightSideBar />
          </div>
        </div>
        <div class= "footer">
          <Footer />
        </div>
      </div>
    );
  }
};

export default Page;
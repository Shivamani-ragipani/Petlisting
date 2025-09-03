import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="back-nav">
          <ArrowLeft className="back-icon" />
          <span className="back-text">Victoria</span>
        </div>
        <div className="breadcrumb">
          <span>Pet Sales</span>
          <span className="separator">/</span>
          <span>Home</span>
          <span className="separator">/</span>
          <span className="current">View</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
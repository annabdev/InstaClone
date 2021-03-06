import React from 'react';
import './App.css';

function App () {
  return (
    <div className="app">
      <div className="app_header">
        <div className="app_headerWrapper">
          <img 
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <button className="primary__button">Log in</button>
            <button className="text__button"></button>
          </div>
        </div>
      </div>
    </div>
  )
}
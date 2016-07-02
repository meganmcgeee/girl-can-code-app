import React from 'react';
import './css/style.css';
import './css/normalize.css';
import './css/skeleton.css';
import './img/ada.png';

export default () => (
  <div className="index">
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h1>Girl Can Code</h1>
          <p>Girl Can Code is an information resource and an initiative to create <a href="https://github.com/gracielovelace/">open-source projects</a> that inspire and support aspiring and existing female software engineers. This work is inspired by using Tracy Chou's work, <a href="https://github.com/triketora/women-in-software-eng">women-in-eng</a>, which is a working list of the percentage of female software engineers employed full-time residing in the continental United States.</p>
        </div>
        <div className="one-half column">
          <img src="ada.png" role="presentation" / >
        </div>
      </div>
    </div>
  </div>
);

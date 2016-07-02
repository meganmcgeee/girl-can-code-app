import React from 'react';
import './css/style.css';
import './css/normalize.css';
import './css/skeleton.css';
import ada from './img/ada.png';

export default () => (
  <div className="index">
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h1>Girl Can Code</h1>
          <p>Girl Can Code is an information resource and an initiative to create <a href="https://github.com/gracielovelace/">open-source projects</a> that inspire and support aspiring and existing female software engineers. This work is inspired by using Tracy Chou's work, <a href="https://github.com/triketora/women-in-software-eng">women-in-eng</a>, which is a working list of the percentage of female software engineers employed full-time residing in the continental United States.</p>
          <p><a href="https://twitter.com/triketora">Tracy Chou</a> pushed the first commit to the git repository <a href="https://github.com/triketora/women-in-software-eng">women-in-eng</a> on Oct 20, 2013 after posting <a href="https://medium.com/@triketora/where-are-the-numbers-cb997a57252#.pjb1ooy93">"Where are the numbers?"</a>, the Medium article that got her story and the story of so many female engineers heard. Since there has been a heightened consciousness of the issue within the tech community and the mainstream media. Interviews, confessionals and research on the matter has brought light to this serious issue of employment equality.<br /><br /> <a href="resources.html">Resources</a>, <a href="organizations.html">organizations</a>, and <a href="mentorship.html">mentorship</a> programs dedicated to addressing the various contributing factors to the gender disparity are being conceived of by the day.</p>
           <p><a href="https://github.com/gracielovelace">Here's</a> another to fight the good fight.</p>
       </div>
        <div className="one-half column">
          <img src={ada} role="presentation" / >
        </div>
      </div>
    </div>
  </div>
);

import './SocialIcons.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import React from 'react';

export default () => (
  <div className="social-icons">
    <a href="#">
      <img alt="Facebook" src={facebook} />
    </a>
    <a href="#">
      <img alt="Instagram" src={instagram} />
    </a>
    <a href="#">
      <img alt="Twitter" src={twitter} />
    </a>
    <a href="#">
      <img alt="LinkedIn" src={linkedin} />
    </a>
  </div>
);

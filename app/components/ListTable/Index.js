import React from 'react';
import './css/style.css';
import './css/normalize.css';
import './css/skeleton.css';

export default () => (
  <div className="container">
    <div className="row">
      <div className="twelve columns" style="margin-top: 10%">
        <h1>Ada's List</h1>
        <p></p>
        <br/>
        <table className="u-full-width">
          <thead>
            <tr className="Headings">
              <th>Name</th>
              <th>Location(s)</th>
              <th>Twitter</th>
              <th>Focus</th>
            </tr>
          </thead>
          <tbody className="Table">
            <tr>
              <td className="name"><{Name}</td>
              <td>
                <ul>
                  <li className="location">{Location}</li>
                </ul>
              </td>
              <td className="Twitter">{Twitter}</td>
              <td className="Focus">{Focus}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
);

import React from 'react';
import { publicRoutes } from '../router';

const About = () => {
  return (
    <div className='about'>
      <h3>An application for check the usability of some diagram libraries</h3>
      <h4>Include libs:</h4>
      <ul>
        {publicRoutes.map(p => <li key={p.path}>{p.name}</li>)}
        {/* <li>Apex Charts</li>
        <li>Biz Charts</li>
        <li>Google Charts</li>
        <li>Chart JS</li> */}
      </ul>
    </div>
  );
};

export default About;
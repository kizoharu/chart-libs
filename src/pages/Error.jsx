import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <h1 style={{color: 'red'}}>
        Error 404...
        <Link to='/'>Go Start Page</Link>
      </h1>
    </div>
  );
};

export default Error;
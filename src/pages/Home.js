import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div className="container">
      <h2 className="asset mt-5">Welcome to the Asset Registration</h2>
      <p></p>

      {/* Asset Registration Section */}
      <h4 className="mt-4">Asset Registration - Choose Location</h4>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <Link to="/bengaluru">
            <Button color="primary" className="w-100">Bengaluru</Button>
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/pune">
            <Button color="info" className="w-100">Pune</Button>
          </Link>
        </div>
        <div className="col-md-4 mb-3">
          <Link to="/chennai">
            <Button color="info" className="w-100">Chennai</Button>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default Home;

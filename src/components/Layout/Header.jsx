import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSatellite } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <Link className="brand" to="/">
          <div>
            <FontAwesomeIcon icon={faSatellite} />
            <h1>Examen IIC2513 2021-2</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/theory">Theory</Link>
            </li>
          </ul>
        </nav>    
      </div>  
    </header>
  );
}

export default Header;

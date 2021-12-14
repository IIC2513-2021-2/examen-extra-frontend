import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <Link className="brand" to="/">
          <div>
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

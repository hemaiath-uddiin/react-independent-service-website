import React from 'react';

import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/service">Services</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>
    </div>

  )
}
export default Navbar;
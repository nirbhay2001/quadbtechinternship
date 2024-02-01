import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/logoimage.png" alt="" width="80" height="50" />
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  SHOWS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                    SCHEDULE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  LIVE TV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

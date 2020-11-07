import logo from "../../assets/logo.svg";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";

import "./NavBar.css";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <a className="navbar-brand">
            <img src={logo} alt="logo" />
          </a>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Classes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lessons
            </a>
          </li>

          <DropdownMenu />
        </ul>
      </div>
    </nav>
  );
}

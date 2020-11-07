import React, { useState } from "react"; //FIXME:

export function DropdownMenu() {
  const [user, setUser] = useState('test@gmail.com');

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        { user }
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">
          { user }
        </a>
        <a className="dropdown-item" href="#">
          Settings
        </a>
        <a className="dropdown-item" href="#">
          Sign out
        </a>
      </div>
    </li>
  );
}

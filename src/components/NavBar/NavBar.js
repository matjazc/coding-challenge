import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import "./NavBar.css";

export function NavBar() {
return (
    <nav
      className="navbar navbar-expand-md navbar-light"
      data-cy="navBar"
    >
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
      <div className="container-fluid">
        <NavigationMenu />
      </div>
    </nav>
  );
}

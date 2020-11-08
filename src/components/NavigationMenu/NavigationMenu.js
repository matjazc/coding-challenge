import { useSelector } from "react-redux";
import { selectUser } from "../../app/userSlice";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import logo from "../../assets/logo.svg";

export function NavigationMenu() {
  const user = useSelector(selectUser);
  
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <a className="navbar-brand">
        <img src={logo} alt="logo" />
      </a>
      <li className="nav-item active">
        <a className="nav-link">
          Classes
        </a>
      </li>
      {user.menuItems.map((item, index) => {
        return (
          <li className="nav-item" key={index}>
            <a className="nav-link">
              {item}
            </a>
          </li>
        );
      })}
    </ul>
    <DropdownMenu />
  </div>
  );
}

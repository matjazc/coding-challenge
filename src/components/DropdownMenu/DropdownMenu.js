import { useSelector, useDispatch } from "react-redux";
import { selectUser, switchUser } from "../../app/userSlice";
import { accounts } from "../../utils/accounts";

export function DropdownMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <li className="nav-item dropdown" data-cy="dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {user.id}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a
          className="dropdown-item"
          href="#"
          onClick={() => dispatch(switchUser())}
          data-cy="dropdown-item"
        >
          {user.id === accounts[0].id ? accounts[1].id : accounts[0].id}
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

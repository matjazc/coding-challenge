import { useSelector, useDispatch } from "react-redux";
import { selectUser, switchUser } from "../../app/userSlice";

export function DropdownMenu() {
  const isTeacher = useSelector(selectUser);
  const dispatch = useDispatch();

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
        { isTeacher ? "teacher@school.org" : "student@school.org"}
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#" onClick={() => dispatch(switchUser())}>
        { isTeacher ? "student@school.org" : "teacher@school.org"}
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

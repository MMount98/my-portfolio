import logo from "../components/images/Logo.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navbar rounded-2xl bg-neutral">
        <img
          className="mask mask-circle w-24"
          src={logo}
        />
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-2xl ">Michael Mount</a>
        </div>
        <div className="flex-1"></div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="">About Me</Link>
            </li>
            <li>
              <Link to="">Portfolio</Link>
            </li>
            <li>
              <Link to="">Contact Me</Link>
            </li>
            <li>
              <Link to="">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

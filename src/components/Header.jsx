import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-light ">
      <nav className="container py-3 d-flex">
        <h4>Company Logo</h4>
        <ul className="nav ">
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" to="/players">
              Players
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-secondary" to="/report">
              Report
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

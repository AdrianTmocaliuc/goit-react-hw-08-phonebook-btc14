import { NavLink } from "react-router-dom";

import s from "./AutNav.module.scss";

const AutNav = () => {
  return (
    <div className={s.authorization}>
      <>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? s.activated : s.nav_link)}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? s.activated : s.nav_link)}
        >
          Login
        </NavLink>
      </>
    </div>
  );
};

export default AutNav;

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import s from "./AutNav.module.scss";

const AutNav = ({ onClick }) => {
  return (
    <div className={s.authorization}>
      <>
        <button onClick={onClick} data-page="register">
          Registration
        </button>
        <button onClick={onClick} data-page="login">
          Login
        </button>
      </>
    </div>
  );
};

export default AutNav;

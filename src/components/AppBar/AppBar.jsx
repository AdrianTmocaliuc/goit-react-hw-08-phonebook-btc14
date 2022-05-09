import AutNav from "./AutNav/AutNav";
import UserMenu from "./UserMenu/UserMenu";
import s from "./AppBar.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const { isAuth } = useSelector((state) => state.authorization);

  return <div className={s.appBar}>{isAuth ? <UserMenu /> : <AutNav />}</div>;
};

export default AppBar;

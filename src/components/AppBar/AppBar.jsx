import AutNav from "./AutNav/AutNav";
import UserMenu from "./UserMenu/UserMenu";
import s from "./AppBar.module.scss";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  // const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.authorization);

  // const onChangePage = ({ target }) => {
  //   const path = target.dataset.page;
  //   // console.log("target", target);
  //   navigate(`/${path}`);
  // };

  return (
    <div className={s.appBar}>
      {isAuth ? (
        <UserMenu
        // onClick={onChangePage}
        />
      ) : (
        <AutNav
        // onClick={onChangePage}
        />
      )}
    </div>
  );
};

export default AppBar;

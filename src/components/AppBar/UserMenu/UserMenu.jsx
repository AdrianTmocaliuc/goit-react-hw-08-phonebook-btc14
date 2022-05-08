import Button from "components/utilities/Button/Button";
import s from "./UserMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "redux/authorization/authorizationAsyncThunk";
import { NavLink } from "react-router-dom";

//

const UserMenu = () => {
  const { user } = useSelector((state) => state.authorization);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={s.userMenu}>
      <div className={s.pages}>
        <NavLink
          to="contacts"
          className={({ isActive }) => (isActive ? s.activated : s.nav_link)}
        >
          Contacts
        </NavLink>
      </div>
      <div className={s.userBar}>
        <p>{"User" && user.email}</p>
        <Button title="Log Out" onClick={logOut} />
      </div>
    </div>
  );
};

export default UserMenu;

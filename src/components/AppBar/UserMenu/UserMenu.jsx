import Button from "components/utilities/Button/Button";
import s from "./UserMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "redux/registration/authorizationAsyncThunk";

//

const UserMenu = ({ onclick }) => {
  const { user } = useSelector((state) => state.authorization);

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logOutUser());
  };

  return (
    <div className={s.userMenu}>
      <div className={s.pages}>
        <button onClick={onclick} data-page="contacts">
          Contacts
        </button>
      </div>
      <div className={s.userBar}>
        <p>{"User" && user.email}</p>
        <Button title="Log Out" onClick={logOut} />
      </div>
    </div>
  );
};

export default UserMenu;

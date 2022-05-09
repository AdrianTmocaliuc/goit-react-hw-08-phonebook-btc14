import { TailSpin } from "react-loader-spinner";
import Button from "components/utilities/Button/Button";
import { useReducer } from "react";

import s from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "redux/authorization/authorizationAsyncThunk";

export const initialState = {
  email: "",
  password: "",
};

export const initialTypes = {
  email: "email",
  password: "password",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.email:
      return { ...state, email: payload };
    case initialTypes.password:
      return { ...state, password: payload };
    case initialTypes.reset:
      return initialState;

    default:
      break;
  }
}

const Login = () => {
  const dispatch = useDispatch();
  const [state, dispatchState] = useReducer(reducer, initialState);
  const { email, password } = state;
  const { authLoader } = useSelector((state) => state.authorization);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    dispatchState({ type: name, payload: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    dispatch(LoginUser(state));

    dispatchState({ type: "reset" });
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label>
          <h3>Email</h3>
          <input
            type="tel"
            name="email"
            value={email}
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
        </label>
        <label>
          <h3>Password</h3>
          <input
            type="tel"
            name="password"
            value={password}
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
        </label>
        {authLoader ? (
          <TailSpin height="27" width="27" color="red" ariaLabel="loading" />
        ) : (
          <Button title="Login" type="submit" />
        )}
      </form>
    </>
  );
};

export default Login;

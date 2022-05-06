import { TailSpin } from "react-loader-spinner";
import Button from "components/utilities/Button/Button";
import { useReducer, useState } from "react";

import s from "./Register.module.scss";

import { useDispatch } from "react-redux";
import { RegisterUser } from "redux/registration/authorizationAsyncThunk";

export const initialState = {
  name: "",
  email: "",
  password: "",
};

export const initialTypes = {
  name: "name",
  email: "email",
  password: "password",
  reset: "reset",
};

export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case initialTypes.name:
      return { ...state, name: payload };
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

const Register = () => {
  const dispatch = useDispatch();

  const [state, dispatchState] = useReducer(reducer, initialState);

  const { name, email, password } = state;

  const [registerLoader, setRegisterLoader] = useState(false);

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    dispatchState({ type: name, payload: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log("state", state);

    dispatch(RegisterUser(state));

    dispatchState({ type: "reset" });
  };

  return (
    <>
      <form className={s.form} onSubmit={onSubmitForm}>
        <label>
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeInput}
          />
        </label>
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
        {registerLoader ? (
          <TailSpin height="27" width="27" color="red" ariaLabel="loading" />
        ) : (
          <Button title="Register" />
        )}
      </form>
    </>
  );
};

export default Register;

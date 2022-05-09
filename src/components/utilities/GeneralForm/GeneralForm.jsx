import { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import PropTypes from "prop-types";

import s from "./GeneralForm.module.scss";
import Button from "components/utilities/Button/Button";
import { initialState, reducer } from "./GeneralFormReducer";
import { RegisterUser } from "redux/authorization/authorizationAsyncThunk";

function GeneralForm({ buttonTitle }) {
  const dispatch = useDispatch();
  const { authLoader } = useSelector((state) => state.authorization);
  console.log("authLoader", authLoader);

  const [state, dispatchState] = useReducer(reducer, initialState);
  const { name, email, password } = state;

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    dispatchState({ type: name, payload: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

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
        {authLoader ? (
          <TailSpin height="27" width="27" color="red" ariaLabel="loading" />
        ) : (
          <Button title={buttonTitle} type="submit" />
        )}
      </form>
    </>
  );
}

export default GeneralForm;

GeneralForm.propTypes = {
  buttonTitle: PropTypes.string,
};

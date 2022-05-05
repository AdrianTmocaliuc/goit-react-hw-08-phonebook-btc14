import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

import Button from "components/Button/Button";
import s from "./Form.module.scss";
import { fetchWithNewContact } from "redux/contacts/contactsAsyncThunk";
import { initialState, reducer } from "./formReducer";

function Form() {
  const items = useSelector((state) => state.items.contacts);
  const addLoader = useSelector((state) => state.items.addLoader);
  const dispatch = useDispatch();

  const [state, dispatchState] = useReducer(reducer, initialState);
  const { name, phone } = state;

  const onChangeInput = ({ target }) => {
    const { name, value } = target;
    dispatchState({ type: name, payload: value });
  };

  const addContacts = (contact) => {
    const inputName = contact.name.toLowerCase();
    const names = items?.map((item) => item.name.toLowerCase());

    if (names?.includes(inputName)) {
      alert(`"${contact.name}" is already in contacts !`);
      return;
    }
    dispatch(fetchWithNewContact(contact));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const contact = { name, phone };

    addContacts(contact);

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
          <h3>Phone</h3>
          <input
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone phone must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
        </label>
        {addLoader ? (
          <TailSpin height="27" width="27" color="red" ariaLabel="loading" />
        ) : (
          <Button title="Add contact" />
        )}
      </form>
    </>
  );
}

export default Form;

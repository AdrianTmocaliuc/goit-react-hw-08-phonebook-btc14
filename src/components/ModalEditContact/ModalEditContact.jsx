import { useCallback, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";

import Button from "components/utilities/Button/Button";
import s from "./ModalEditContact.module.scss";
import { initialState, reducer } from "./ModalEditContactReducer";

const ModalEditContact = ({ onClose, contactId }) => {
  const items = useSelector((state) => state.items.contacts);

  const editContact = items?.filter((item) => item.id === contactId)[0];

  const dispatch = useDispatch();

  const [state, dispatchState] = useReducer(reducer, initialState);
  const { name, number } = state;

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
    console.log("contact", contact);
    //   dispatch(fetchWithNewContact(contact));
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    //   const contact = { name, number };

    //   addContacts(contact);

    dispatchState({ type: "reset" });
  };

  const backdropCLoseByEscape = useCallback((e) => {
    if (e.code === "Escape") {
      onClose();
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", backdropCLoseByEscape);

    return () => {
      window.removeEventListener("keydown", backdropCLoseByEscape);
    };
  }, [backdropCLoseByEscape]);

  const onBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.backdrop} onClick={onBackdropClose}>
      <form className={s.modal} onSubmit={onSubmitForm}>
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
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeInput}
          />
        </label>
        <Button title="Change contact" />
      </form>
    </div>
  );
};

export default ModalEditContact;

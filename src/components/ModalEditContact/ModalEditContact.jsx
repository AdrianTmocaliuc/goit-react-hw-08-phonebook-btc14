import { useCallback, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TailSpin } from "react-loader-spinner";
import PropTypes from "prop-types";

import Button from "components/utilities/Button/Button";
import s from "./ModalEditContact.module.scss";
import { initialState, reducer, initialTypes } from "./ModalEditContactReducer";
import { fetchChangeContact } from "redux/contacts/contactsAsyncThunk";

const ModalEditContact = ({ onClose, contactById }) => {
  console.log("contactById", contactById);
  const { contacts } = useSelector((state) => state.items);

  const init = (props) => {
    return {
      ...initialState,
      id: props.id,
      name: props.name,
      number: props.number,
    };
  };

  const dispatch = useDispatch();

  const [state, dispatchState] = useReducer(reducer, contactById, init);
  const { id, name, number } = state;

  const onChangeInput = ({ target }) => {
    const { name, value } = target;

    dispatchState({ type: name, payload: value });
  };

  const checkContact = (contact) => {
    const inputName = contact.name.toLowerCase();
    const names = contacts?.map((item) => item.name.toLowerCase());
    if (names?.includes(inputName)) {
      alert(`"${contact.name}" is already in contacts !`);
      return false;
    }

    return true;
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const contact = { id, name, number };

    const test = checkContact(contact);

    if (!test) {
      return;
    }

    dispatch(fetchChangeContact(contact));

    onClose();
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
        <Button title="Change contact" type="submit" />
        <Button title="Cancel" onClick={() => onClose()} />
      </form>
    </div>
  );
};

export default ModalEditContact;

ModalEditContact.propTypes = {
  onClose: PropTypes.func.isRequired,
  contactById: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
};

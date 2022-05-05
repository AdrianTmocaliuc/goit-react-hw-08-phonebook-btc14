import Button from "components/Button/Button";
import s from "./Item.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchRemoveContact } from "redux/contacts/contactsAsyncThunk";
import { useState } from "react";

export const Item = ({ contactsList }) => {
  const [buttonId, setButtonId] = useState("");
  const { name, phone, id } = contactsList;

  const dispatch = useDispatch();

  const handleClick = ({ target: { id } }) => {
    setButtonId(id);
    dispatch(fetchRemoveContact(id));
  };

  return (
    <>
      {name && phone && (
        <li className={s.item} type={name}>
          {name}: {phone}
          <Button
            id={id}
            selected={buttonId}
            title="delete"
            onClick={handleClick}
          />
        </li>
      )}
    </>
  );
};

Item.propTypes = {
  contactsList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

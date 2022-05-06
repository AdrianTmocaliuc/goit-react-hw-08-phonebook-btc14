import Button from "components/utilities/Button/Button";
import s from "./Item.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchRemoveContact } from "redux/contacts/contactsAsyncThunk";
import { useState } from "react";

export const Item = ({ contactsList }) => {
  const [buttonId, setButtonId] = useState("");
  const { name, number, id } = contactsList;

  const dispatch = useDispatch();

  const handleClick = ({ target: { id } }) => {
    setButtonId(id);
    dispatch(fetchRemoveContact(id));
  };

  return (
    <>
      {name && number && (
        <li className={s.item} type={name}>
          {name}: {number}
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
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

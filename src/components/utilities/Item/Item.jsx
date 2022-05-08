import Button from "components/utilities/Button/Button";
import s from "./Item.module.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { fetchRemoveContact } from "redux/contacts/contactsAsyncThunk";
import { useState } from "react";
import ModalEditContact from "components/ModalEditContact/ModalEditContact";

export const Item = ({ contactsList }) => {
  const [buttonId, setButtonId] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const { name, number, id } = contactsList;

  const dispatch = useDispatch();

  const handleClick = ({ target: { id } }) => {
    setButtonId(id);
    console.log("id", id);

    dispatch(fetchRemoveContact(id));
  };

  const onCLickButton = ({ target: { id } }) => {
    setButtonId(id);
    setModalShow(true);
  };

  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  return (
    <>
      {name && number && (
        <li className={s.item} type={name}>
          {name}: {number}
          <Button
            id={id}
            selected={buttonId}
            title="Delete"
            onClick={handleClick}
          />
          {/* <Button
            id={id}
            selected={buttonId}
            title="Edit"
            onClick={onCLickButton}
          /> */}
        </li>
      )}
      {modalShow && (
        <ModalEditContact contactId={buttonId} onClose={toggleModal} />
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

import Button from "components/utilities/Button/Button";
import s from "./Item.module.scss";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchRemoveContact } from "redux/contacts/contactsAsyncThunk";
import { useState } from "react";
import ModalEditContact from "components/ModalEditContact/ModalEditContact";

export const Item = ({ contactsList }) => {
  const { contacts } = useSelector((state) => state.items);
  // console.log("state", contacts);
  const [contact, setContact] = useState({});
  const [buttonId, setButtonId] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const { name, number, id } = contactsList;

  const dispatch = useDispatch();

  const deleteClick = ({ target: { id } }) => {
    setButtonId(id);
    console.log("id", id);

    dispatch(fetchRemoveContact(id));
  };

  const changeClick = ({ target: { id } }) => {
    setContact(...contacts.filter((item) => item.id === id));
    //s.filter(item=>item.id===id) setButtonId(id);
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
            onClick={deleteClick}
          />
          <Button
            id={id}
            selected={buttonId}
            title="Edit"
            onClick={changeClick}
          />
        </li>
      )}
      {modalShow && (
        <ModalEditContact contactById={contact} onClose={toggleModal} />
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

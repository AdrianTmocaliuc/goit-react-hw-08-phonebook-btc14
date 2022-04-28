import { Button } from "components/Button/Button";
import s from "./Item.module.scss";
import PropTypes from "prop-types";
// import { actionDeleteContacts } from "redux/contacts/contacts-actions";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-slice/contacts-slice";

export const Item = ({ contactsList }) => {
  const { name, number, id } = contactsList;

  const dispatch = useDispatch();

  return (
    <>
      {name && number && (
        <li className={s.item} type={name}>
          {name}: {number}
          <Button
            id={id}
            title="Delete"
            onClick={({ target: { id } }) => {
              dispatch(deleteContact(id));
            }}
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

import { useEffect } from "react";
import PropTypes from "prop-types";
import { Item } from "components/utilities/Item/Item";
import { useSelector, useDispatch } from "react-redux";
import { TailSpin } from "react-loader-spinner";

import { fetchContacts } from "redux/contacts/contactsAsyncThunk";

function Contacts() {
  const items = useSelector((state) => state.items.contacts) || [];
  const contactsLoader = useSelector((state) => state.items.contactsLoader);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = items.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      {contactsLoader ? (
        <TailSpin height="25" width="25" color="red" ariaLabel="loading" />
      ) : (
        <ul>
          {!!filterContacts.length &&
            filterContacts.map((item) => {
              return <Item key={item.id} contactsList={item} />;
            })}
        </ul>
      )}
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default Contacts;

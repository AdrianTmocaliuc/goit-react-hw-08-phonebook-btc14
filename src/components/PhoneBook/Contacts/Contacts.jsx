import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Item } from "components/Item/Item";
import { useSelector, useDispatch } from "react-redux";

import { fetchContacts } from "redux/contacts/contactsAsyncThunk";

function Contacts() {
  const items = useSelector((state) => state.items.contacts) || [];
  // const filter = useSelector((state) => state.filter);
  const contactsSlice = useDispatch();
  // console.log("items", items);

  useEffect(() => {
    contactsSlice(fetchContacts());
  }, []);

  // const filterContacts = items.filter((elem) => {
  //   return elem.name.toLowerCase().includes(filter.toLowerCase());
  // });

  return (
    <>
      <ul>
        {/* {!!filterContacts.length &&
          filterContacts.map((item) => {
            return <Item key={item.id} contactsList={item} />;
          })} */}
        {items?.map((item) => {
          return <Item key={item.id} contactsList={item} />;
        })}
      </ul>
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

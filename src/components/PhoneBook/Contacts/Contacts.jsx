import PropTypes from "prop-types";
import { Item } from "components/Item/Item";
import { useSelector } from "react-redux";

import React from "react";

function Contacts() {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const filterContacts = contacts.filter((elem) => {
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <ul>
        {!!filterContacts.length &&
          filterContacts.map((item) => {
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
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default Contacts;

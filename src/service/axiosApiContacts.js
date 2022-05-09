import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const getContacts = async () => {
  try {
    const res = await axios.get("/contacts");

    return res.data;
  } catch (error) {
    if (error.response.status === 404) {
      alert("No contacts !");
    }
    return console.log(error);
  }
};

const putContact = async (contact) => {
  try {
    const res = await axios({
      method: "post",
      url: "/contacts",
      data: contact,
    });
    // const contacts = await axios.post("/contacts", contact);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
};

const removeContact = async (id) => {
  try {
    const res = await axios.delete(`/contacts/${id}`);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
};

const changeContact = async (contact) => {
  try {
    // const res = await axios.patch(`/contacts/${contact.id}`, {
    //   name: contact.name,
    //   number: contact.number,
    // });
    const res = await axios({
      method: "patch",
      url: `/contacts/${contact.id}`,
      data: {
        name: contact.name,
        number: contact.number,
      },
    });
    return res.data;
  } catch (error) {
    return console.log(error);
  }
};

export { getContacts, putContact, removeContact, changeContact };

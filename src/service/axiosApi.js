import axios from "axios";

axios.defaults.baseURL = "https://626f8cc5c508beec488536d8.mockapi.io";

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
    // console.log("contacts", contacts);
    return res.data;
  } catch (error) {
    return console.log(error);
  }
};

export { getContacts, putContact, removeContact };

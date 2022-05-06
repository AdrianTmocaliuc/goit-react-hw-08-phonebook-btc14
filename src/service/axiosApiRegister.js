import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const registerUser = async (user) => {
  try {
    const res = await axios.post("/contacts", user);

    return res.data;
  } catch (error) {
    if (error.response.status === 404) {
      alert("No contacts !");
    }
    return console.log(error);
  }
};

export { registerUser };

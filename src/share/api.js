import axios from "axios";

axios.defaults.baseURL = "https://631f669222cefb1edc4b2978.mockapi.io";

export const fetchPostContacts = async (contact) => {
  return await axios.post("/contacts", contact);
};

export const fetchGetContacts = async () => {
  return await axios.get("/contacts");
};

export const fetchDeleteContacts = async (id) => {
  return await axios.delete(`/contacts/${id}`);
};

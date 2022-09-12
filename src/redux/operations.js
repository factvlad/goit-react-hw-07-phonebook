import Notiflix from "notiflix";

import {
  fetchPostContacts,
  fetchGetContacts,
  fetchDeleteContacts,
} from "../services/api";
import {
  getContacts,
  removeContacts,
  postContact,
} from "./contacts/contacts-slice";
import { setError, resetError } from "./error/errorSlice";

const isDuplicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find((item) => {
    return normalizedName === item.name.toLowerCase();
  });

  return Boolean(result);
};

export const postContactsOperations = (data) => {
  return async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDuplicate(data, contacts.items)) {
      return Notiflix.Notify.warning(`${data.name} is already exists`);
    }
    try {
      const contact = await fetchPostContacts(data);
      dispatch(postContact(contact.data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const getContactsOperations = () => {
  return async (dispatch) => {
    try {
      dispatch(resetError(null));
      const { data } = await fetchGetContacts();
      dispatch(getContacts(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const removeContactsOperation = (id) => {
  return async (dispatch) => {
    try {
      await fetchDeleteContacts(id);
      dispatch(removeContacts(id));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

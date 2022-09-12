import { createSlice } from "@reduxjs/toolkit";

export const getContactsSlice = createSlice({
  name: "contacts",
  initialState: [],
  reducers: {
    getContacts: (_, { payload }) => payload,
    postContact: (state, { payload }) => {
      state.push(payload);
    },
    removeContacts: (state, { payload }) => {
      return state.filter((el) => el.id !== payload);
    },
  },
});

export const { getContacts, postContact, removeContacts } =
  getContactsSlice.actions;

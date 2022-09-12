import { combineReducers } from "redux";
import { getContactsSlice } from "./contacts/contacts-slice";
import { filterSlice } from "./filter/filter-slice";

export const rootReducer = combineReducers({
  items: getContactsSlice.reducer,
  filter: filterSlice.reducer,
});

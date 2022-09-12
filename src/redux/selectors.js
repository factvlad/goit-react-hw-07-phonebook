export const getFilterContacts = (state) => {
  if (state.contacts.items.length === 0) {
    return state.contacts.items;
  }

  return state.contacts.items.filter((el) =>
    el.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
};

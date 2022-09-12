import { ContactForm, ContactList, Filter } from 'components';
import s from "./App.module.scss"


export const App = () => {
  return (
    <div className={ s.container }>
      <h2>PhoneBook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

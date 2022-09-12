import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFilterContacts } from "../../redux/selectors";
import {
  getContactsOperations,
  removeContactsOperation,
} from "../../redux/operations";
import s from "../App.module.scss"

const ContactList = () => {

  const dispatch = useDispatch();
  const contactsFilter = useSelector(getFilterContacts);

  useEffect(() => {
    dispatch(getContactsOperations());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function removeContact(id) {
    dispatch(removeContactsOperation(id));
  }


  return (
    <ul className={ s.contacts }>
      { contactsFilter.map(({ name, phone, id }) => (
        <li className={ s.contacts } key={ id }>
          <span className={ s.btnDel }
            onClick={ () => {
              removeContact(id);
            } }>X</span>
          <span className={ s.name }>
            { name } :
          </span>
          { phone }
        </li>
      )) }
    </ul>
  );
};

export default ContactList

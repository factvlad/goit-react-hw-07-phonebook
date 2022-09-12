import { useState } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';
import { postContactsOperations } from "../../redux/operations";
import s from "../App.module.scss"

function ContactForm() {
  const [state, setState] = useState({
    name: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const { name, phone } = state;

  const nameId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(state);
    e.target.reset(
      setState({
        name: "",
        phone: "",
      })
    );
  };


  const handleChange = ({ target }) => {
    setState((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  function addContact(data) {
    dispatch(postContactsOperations(data));
  }
  return (
    <form
      className={ s.form }
      onSubmit={ handleSubmit }>
      <input
        type="text"
        id={ nameId }
        name="name"
        value={ name }
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={ handleChange }
      />
      <input
        onChange={ handleChange }
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={ phone }
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
export default ContactForm

import s from "../App.module.scss"
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { filterContact } from "../../redux/filter/filter-slice";

function Filter() {
  const dispatch = useDispatch();
  const filterId = nanoid();

  function handleFilter({ target }) {
    dispatch(filterContact(target.value));
  }

  return (
    <input
      id={ filterId }
      className={ s.input }
      type="text"
      name="filter"
      onChange={ handleFilter }
    />
  );

}

export default Filter

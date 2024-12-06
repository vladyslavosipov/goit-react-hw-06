import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={s.container}>
      <p className={s.text}>Find contact by name</p>
      <input className={s.input} type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "redux/filter/filter-slice";
// import { actionFilterContacts } from "redux/filter/filter-actions";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function inputChange({ target: { value } }) {
    dispatch(filterContacts(value));
  }

  return (
    <>
      <label style={{ display: "grid" }}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          style={{ width: "200px" }}
          onChange={inputChange}
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
};

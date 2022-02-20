import React from "react";
import { connect } from "react-redux";
import { sortByDate, sortByAmount } from "../../../actions/filters";

const ConnectedSelectField = ({ filters, dispatch }) => (
  <div className="xps__list__select-wrapper">
    <select
      value={filters.sortBy}
      onChange={(e) => {
        if (e.target.value === "date") {
          dispatch(sortByDate());
        }
        if (e.target.value === "amount") {
          dispatch(sortByAmount());
        }
      }}
      className="xps__list__select"
    >
      <optgroup label="Select a filter from below.">
        <option name="select-default" defaultValue={"Select option.."}>
          Select option..
        </option>
        <option name="date" value={"date"}>
          Expense created
        </option>
        <option name="amount" value={"amount"}>
          Expense amount
        </option>
      </optgroup>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ConnectedSelectField);

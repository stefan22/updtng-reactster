import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import "../../../scss/components/connected-expenses-list.scss";
import { filterBy } from "../../../actions/filters";

const ConnectedExpensesList = ({ expenses }) => (
  <div className="xps__list--wrapper">
    <section className="xps__list">
      {expenses.map((expense, idx) => (
        <ExpenseListItem key={idx} {...expense} />
      ))}
    </section>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: filterBy(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ConnectedExpensesList);

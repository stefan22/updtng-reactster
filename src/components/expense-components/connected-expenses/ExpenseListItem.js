import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../../actions/expenses";
import "../../../scss/components/connected-expenses-list.scss";

const ExpenseListItem = (props) => (
  <div className="xps__list__single">
    <h4>{props.name} expense</h4>
    <div className="xps__list__single--content">
      <p>Id: {props.id}</p>
      <p>Amount: {props.amount}</p>
      <p>Description: {props.desc}</p>
      <p>
        Created: {props.create} {new Date().getTime()}
      </p>
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.id }));
        }}
        className="xps__list__single__content__button"
      >
        Remove
      </button>
    </div>
  </div>
);

export default connect()(ExpenseListItem);

import React, { Component } from "react";
import { gsap, Power3, Bounce } from "gsap";
import ConnectedExpensesList from "./connected-expenses/ConnectedExpensesList";
import ConnectedInputTextField from "./form-components/ConnectedInputTextField";
import ConnectedSelectField from "./form-components/ConnectedSelectField";
import dp from "../../images/dp.png";

class Dashboard extends Component {
  componentDidMount() {
    const exp = gsap.timeline();
    exp
      .from("#dashboard", 1.1, {
        ease: Power3.easeOut,
        y: -1100,
      })
      .from("#dashboard h2", 1.5, {
        opacity: 0.25,
        ease: Bounce.easeOut,
      });
  }

  render() {
    return (
      <div id="main">
        <div id="dashboard" className="dashboard">
          <div className="dashboard--heading">
            <h2>
              <img src={dp} alt={"dp"} width="30" height="auto" />
              Expenses dashboard
            </h2>
            <p className="xps__list__par">Filter Expenses By:</p>
          </div>
          <section className="xps__list--filters-wrapper">
            <ConnectedInputTextField name={"filter"} type={"text"} />
            <ConnectedSelectField />
          </section>

          <ConnectedExpensesList />
        </div>
      </div>
    );
  }
}

export default Dashboard;

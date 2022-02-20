import React, { Component } from "react";
import { gsap, Power3, Bounce } from "gsap";
import "../scss/components/contact-us.scss";

class ContactUsComp extends Component {
  componentDidMount() {
    const exp = gsap.timeline();
    exp
      .from("#contact-us", 1.5, {
        ease: Power3.easeOut,
        y: 1500,
      })
      .from("#contact-us h3", 1.5, {
        opacity: 0.25,
        ease: Bounce.easeOut,
      });
  }

  render() {
    return (
      <div id="main">
        <div id="contact-us" className="dashboard contact-us">
          <h3>Contact Us</h3>

          <div className="contactus__form-wrap">
            <form onSubmit={this.handleSubmit} id="add-expense--form">
              <h3>Like to get in touch?</h3>
              Name:
              <input
                className="contactus__input-field"
                type="text"
                name="name"
              />
              Message:
              <textarea
                className="contactus__textarea-field"
                rows={5}
                cols={15}
                type="text"
                name="message"
              />
              <div className="contactus__button-wrap">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsComp;

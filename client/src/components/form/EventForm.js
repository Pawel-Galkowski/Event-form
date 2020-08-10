import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { eventForm } from "../../actions/forms";
import Alert from "../layout/Alert";

const EventForm = ({ eventForm }) => {
  const [formData, setFormData] = useState({});

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    beforePush();
    e.preventDefault();
    eventForm(formData);
    setFormData({});
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  const beforePush = () => {
    setFormData({ ...formData, formName: eventName });
    setFormData({ ...formData, subject: eventSubject });
  };

  const eventName = "Brainhub Event";
  const eventSubject = "Register confirmation";

  return (
    <div className="fullSide">
      <div className="main-container">
        <section className="formTemplate">
          <article>
            <div className="headerText">
              <h3>{eventName}</h3>
              <h1>Let's register to next event!</h1>
            </div>
            <form className="mainForm" onSubmit={formSubmit}>
              <div className="double-box">
                <div className="inline-box">
                  <label>First name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="inline-box">
                  <label>Last name</label>
                  <input
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <label>E-mail Adress</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                required
              />
              <label>Event date</label>
              <input type="date" name="date" onChange={onChange} required />
              <Alert />
              <input type="submit" value="Send" />
            </form>
          </article>
        </section>
      </div>
    </div>
  );
};

EventForm.propTypes = {
  eventForm: PropTypes.func.isRequired,
};

export default connect(null, { eventForm })(EventForm);

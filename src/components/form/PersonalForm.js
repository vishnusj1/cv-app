import React from 'react';
export default class PersonalForm extends React.Component {
  render() {
    const { fname, lname, email, phone, title, summary } = this.props.personalInfo;
    const { handleChange } = this.props;
    return (
      <section className="PersonalForm">
        <h2>Personal Details</h2>
        <form action="" className="form ">
          <label htmlFor="title">Wanted Job Title</label>
          <input
            type="email"
            name="title"
            id="title"
            value={title}
            onChange={(e) => handleChange(e)}
            className="mg-r-a"
          />

          <div className="Name">
            <div className="mg-r-a">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={fname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                value={lname}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="summary">
            <h3>Professional Summary</h3>
          </label>
          <textarea
            name="summary"
            id="summary"
            value={summary}
            onChange={(e) => handleChange(e)}
            cols="30"
            rows="10"
          />
        </form>
      </section>
    );
  }
}

import React from 'react';
export default class PersonalForm extends React.Component {
  render() {
    const { name, email, phone } = this.props.personalInfo;
    const { handleChange } = this.props;
    return (
      <section className="PersonalForm">
        <h2>Personal Details</h2>
        <form action="" className="form personal">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
      </section>
    );
  }
}

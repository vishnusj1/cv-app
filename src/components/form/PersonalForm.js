import React from 'react';
const PersonalForm = ({ personalInfo, handleChange, handleValidation, errors }) => {
  const { fname, lname, email, phone, title, summary } = personalInfo;
  const { firstName: ERRFNAME } = errors;

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
          onChange={handleChange}
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
              onChange={handleChange}
              onBlur={(e) => handleValidation(e)}
            />
            {ERRFNAME !== '' && <span className="errorDescription">{ERRFNAME}</span>}
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input type="text" name="lname" id="lname" value={lname} onChange={handleChange} />
          </div>
        </div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={handleChange} />
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange} />
        <label htmlFor="summary">
          <h3>Professional Summary</h3>
        </label>
        <textarea
          name="summary"
          id="summary"
          value={summary}
          onChange={handleChange}
          cols="30"
          rows="10"
        />
      </form>
    </section>
  );
};
export default PersonalForm;

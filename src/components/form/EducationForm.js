import React from 'react';

const EducationForm = ({ education, addForm, handleChange, removeForm }) => {
  const EducationFormItems = education.map((item) => (
    <EducationFormItem
      key={item.id}
      id={item.id}
      school={item.school}
      degree={item.degree}
      from={item.from}
      to={item.to}
      handleChange={handleChange}
      removeForm={removeForm}
    />
  ));
  return (
    <section className="EducationForm">
      <h2>Education History</h2>
      {EducationFormItems}
      <button className="btn add" onClick={addForm}>
        Add
      </button>
    </section>
  );
};

const EducationFormItem = ({ id, school, degree, from, to, handleChange, removeForm }) => {
  return (
    <>
      <form action="" className="form education">
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          value={school}
          onChange={(e) => handleChange(e, id)}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          value={degree}
          onChange={(e) => handleChange(e, id)}
        />
        <label htmlFor="from">From</label>
        <input
          type="date"
          name="from"
          id="from"
          value={from}
          onChange={(e) => handleChange(e, id)}
        />
        <label htmlFor="to">To</label>
        <input type="date" name="to" id="to" value={to} onChange={(e) => handleChange(e, id)} />
        <button className="btn rmv" onClick={(e) => removeForm(e, id)}>
          Remove
        </button>
      </form>
    </>
  );
};
export default EducationForm;

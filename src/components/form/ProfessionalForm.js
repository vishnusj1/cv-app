import React from 'react';

const ProfessionalForm = ({ professional, handleChange, addForm, removeForm }) => {
  const professionalFormItems = professional.map((item) => (
    <ProfessionalFormItems
      key={item.id}
      id={item.id}
      company={item.company}
      title={item.title}
      from={item.from}
      to={item.to}
      handleChange={handleChange}
      removeForm={removeForm}
    />
  ));
  return (
    <section className="ProfessionalForm">
      <h2>Professional History</h2>
      {professionalFormItems}
      <button className="btn add" onClick={addForm}>
        Add
      </button>
    </section>
  );
};
const ProfessionalFormItems = ({ id, company, title, from, to, handleChange, removeForm }) => {
  return (
    <form action="" className="form professional">
      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        value={company}
        onChange={(e) => handleChange(e, id)}
      />
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => handleChange(e, id)}
      />
      <label htmlFor="tasks">Tasks</label>
      <textarea type="text" name="tasks" id="tasks" onChange={(e) => handleChange(e, id)} />
      <label htmlFor="workFrom">From</label>
      <input
        type="date"
        name="from"
        id="workFrom"
        value={from}
        onChange={(e) => handleChange(e, id)}
      />
      <label htmlFor="workTo">To</label>
      <input type="date" name="to" id="workTo" value={to} onChange={(e) => handleChange(e, id)} />
      <button className="btn rmv" onClick={(e) => removeForm(e, id)}>
        Remove
      </button>
    </form>
  );
};
export default ProfessionalForm;

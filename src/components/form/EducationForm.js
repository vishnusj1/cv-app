import React from 'react';

export default class EducationForm extends React.Component {
  render() {
    const { addForm, handleChange, removeForm } = this.props;
    const EducationFormItems = this.props.education.map((item) => (
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
        <h2>Education</h2>
        {EducationFormItems}
        <button className="btn add" onClick={(e) => addForm(e)}>
          Add
        </button>
      </section>
    );
  }
}
class EducationFormItem extends React.Component {
  render() {
    const { handleChange, removeForm } = this.props;
    const { id, school, degree, from, to } = this.props;
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
  }
}

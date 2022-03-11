import React from 'react';

export default class Main extends React.Component {
  render() {
    const { personal, professional, education } = this.props.cv;
    const professionalItems = professional.map((item) => (
      <ProfessionalItem
        key={item.id}
        company={item.company}
        title={item.title}
        tasks={item.tasks}
        from={item.from}
        to={item.to}
      />
    ));
    const educationalItems = education.map((item) => (
      <EducationalItem
        key={item.id}
        degree={item.degree}
        school={item.school}
        from={item.from}
        to={item.to}
      />
    ));
    return (
      <div className="main">
        <div className="profile">
          <h3>Profile</h3>
          <p>{personal.summary}</p>
        </div>
        <div className="employement">
          <h3>Employement</h3>
          {professionalItems}
        </div>
        <div className="education">
          <h3>Education</h3>
          {educationalItems}
        </div>
      </div>
    );
  }
}
class ProfessionalItem extends React.Component {
  render() {
    const { title, company, tasks, from, to } = this.props;
    return (
      <div>
        <h4>
          <i>{title}</i>, {company}
        </h4>
        <span className="period">
          {from} - {to}
        </span>
        <p>{tasks}</p>
      </div>
    );
  }
}
class EducationalItem extends React.Component {
  render() {
    const { degree, school, from, to } = this.props;
    return (
      <div>
        <h4>
          <i>{degree}</i>, {school}
        </h4>
        <span className="period">
          {from} - {to}
        </span>
      </div>
    );
  }
}

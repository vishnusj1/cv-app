import React from 'react';
import uniqid from 'uniqid';
export default class Side extends React.Component {
  render() {
    const { email, phone } = this.props.cv.personal;
    const { skills } = this.props.cv;
    const skillList = skills.map((skill) => {
      if (skills.indexOf(skill) === skills.length - 1) {
        return <span key={uniqid()}>{skill}</span>;
      } else {
        return <span key={uniqid()}>{skill}, </span>;
      }
    });

    return (
      <div className="side">
        <div>
          <h3>Details</h3>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div>
          <h3>Skills</h3>
          <p>{skillList}</p>
        </div>
      </div>
    );
  }
}

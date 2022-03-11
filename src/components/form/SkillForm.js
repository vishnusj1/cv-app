import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';

export default class SkillForm extends React.Component {
  render() {
    const { removeSkill } = this.props;
    const skillList = this.props.skills.map((skill) => (
      <li key={uniqid()}>
        {skill}
        <span onClick={(e) => removeSkill(e)}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
      </li>
    ));
    const { addSkill } = this.props;
    return (
      <section className="SkillForm">
        <h2>Skills</h2>
        <div className="skills">
          <ul>{skillList}</ul>
        </div>
        <form action="" className="form" onSubmit={(e) => addSkill(e)}>
          <input type="text" name="skills" id="skills" className="mg-r-a" />
          <button type="submit" className="btn add">
            Add
          </button>
        </form>
      </section>
    );
  }
}

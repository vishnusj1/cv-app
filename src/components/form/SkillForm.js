import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import uniqid from 'uniqid';

const SkillForm = ({ addSkill, removeSkill, skills }) => {
  const skillList = skills.map((skill) => (
    <li key={uniqid()}>
      {skill}
      <span onClick={removeSkill}>
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </li>
  ));
  return (
    <section className="SkillForm">
      <h2>Skills</h2>
      <div className="skills">
        <ul>{skillList}</ul>
      </div>
      <form action="" className="form" onSubmit={addSkill}>
        <input type="text" name="skills" id="skills" className="mg-r-a" />
        <button type="submit" className="btn add">
          Add
        </button>
      </form>
    </section>
  );
};
export default SkillForm;

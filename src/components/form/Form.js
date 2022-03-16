import React from 'react';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import ProfessionalForm from './ProfessionalForm';
import SkillForm from './SkillForm';

const Form = (props) => {
  const { personal, education, professional, skills } = props.cv;
  const { onChangePersonal, onChangeProfessional, onChangeEducation } = props;
  const { onAddEducation, onAddProfession } = props;
  const { onRemoveEducation, onRemoveProfession } = props;
  const { onAddSkill, onRemoveSkill } = props;
  return (
    <div className="form container">
      <PersonalForm personalInfo={personal} handleChange={onChangePersonal} />
      <ProfessionalForm
        professional={professional}
        handleChange={onChangeProfessional}
        addForm={onAddProfession}
        removeForm={onRemoveProfession}
      />
      <EducationForm
        education={education}
        handleChange={onChangeEducation}
        addForm={onAddEducation}
        removeForm={onRemoveEducation}
      />
      <SkillForm skills={skills} addSkill={onAddSkill} removeSkill={onRemoveSkill} />
    </div>
  );
};
export default Form;

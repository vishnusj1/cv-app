import React from 'react';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import ProfessionalForm from './ProfessionalForm';
import SkillForm from './SkillForm';

class Form extends React.Component {
  render() {
    const { personal, education, professional, skills } = this.props.cv;
    const { onChangePersonal, onChangeProfessional, onChangeEducation } = this.props;
    const { onAddEducation, onAddProfession } = this.props;
    const { onRemoveEducation, onRemoveProfession } = this.props;
    const { onAddSkill } = this.props;
    return (
      <div className="container">
        <PersonalForm personalInfo={personal} handleChange={onChangePersonal} />
        <ProfessionalForm
          professional={professional}
          handleChange={onChangeProfessional}
          addForm={onAddProfession}
          removeForm={onRemoveEducation}
        />
        <EducationForm
          education={education}
          handleChange={onChangeEducation}
          addForm={onAddEducation}
          removeForm={onRemoveProfession}
        />
        <SkillForm skills={skills} addSkill={onAddSkill} />
      </div>
    );
  }
}
export default Form;

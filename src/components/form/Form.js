import React from 'react';
import uniqid from 'uniqid';
import PersonalForm from './PersonalForm';
import EducationForm from './EducationForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: '',
        email: '',
        phone: '',
      },
      education: [
        {
          id: uniqid(),
          school: '',
          degree: '',
          from: '',
          to: '',
        },
      ],
      professional: [
        {
          id: uniqid(),
          company: '',
          title: '',
          from: '',
          to: '',
        },
      ],
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleEducationalChange = this.handleEducationalChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
    this.addProfession = this.addProfession.bind(this);
    this.removeEducationForm = this.removeEducationForm.bind(this);
    this.removeProfessionalForm = this.removeProfessionalForm.bind(this);
  }
  handlePersonalChange(e) {
    const { name, value } = e.target;
    const personal = {
      ...this.state.personal,
      [name]: value,
    };
    this.setState(() => ({ personal }));
  }

  handleEducationalChange(e, id) {
    const { name, value } = e.target;
    const obj = this.state.education.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    this.setState(
      (prevState) => ({
        ...prevState,
        education: [...obj],
      }),
      () => console.log(name, value, this.state.education)
    );
  }
  addEducation(e) {
    const obj = {
      id: uniqid(),
      school: '',
      degree: '',
      from: '',
      to: '',
    };
    const education = this.state.education.concat(obj);
    this.setState(() => ({ education }));
  }
  removeEducationForm(e, id) {
    e.preventDefault();
    const obj = [...this.state.education.filter((obj) => obj.id !== id)];
    this.setState((prevState) => ({
      ...prevState,
      education: [...obj],
    }));
  }

  handleProfessionalChange(e, id) {
    const { name, value } = e.target;
    const obj = this.state.professional.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    this.setState((prevState) => ({
      ...prevState,
      professional: [...obj],
    }));
  }
  addProfession(e) {
    const obj = {
      id: uniqid(),
      company: '',
      title: '',
      from: '',
      to: '',
    };
    const professional = this.state.professional.concat(obj);
    this.setState(() => ({ professional }));
  }
  removeProfessionalForm(e, id) {
    e.preventDefault();
    const obj = [...this.state.professional.filter((obj) => obj.id !== id)];
    this.setState((prevState) => ({
      ...prevState,
      professional: [...obj],
    }));
  }
  render() {
    const { personal, education, professional } = this.state;
    return (
      <div className="FormContainer">
        <PersonalForm personalInfo={personal} handleChange={this.handlePersonalChange} />
        <EducationForm
          education={education}
          handleChange={this.handleEducationalChange}
          addForm={this.addEducation}
          removeForm={this.removeEducationForm}
        />
        <ProfessionalForm
          professional={professional}
          handleChange={this.handleProfessionalChange}
          addForm={this.addProfession}
          removeForm={this.removeProfessionalForm}
        />
      </div>
    );
  }
}
export default Form;

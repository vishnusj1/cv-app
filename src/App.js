import React from 'react';
import uniqid from 'uniqid';
import Form from './components/form/Form';
import Preview from './components/preview/Preview';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        title: '',
        summary: '',
      },
      professional: [
        {
          id: uniqid(),
          company: '',
          title: '',
          from: '',
          to: '',
        },
      ],
      education: [
        {
          id: uniqid(),
          school: '',
          degree: '',
          from: '',
          to: '',
        },
      ],
      skills: [],
      preview: false,
    };
    this.handlePersonalChange = this.handlePersonalChange.bind(this);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
    this.handleEducationalChange = this.handleEducationalChange.bind(this);
    this.addProfession = this.addProfession.bind(this);
    this.removeProfessionalForm = this.removeProfessionalForm.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.removeEducationForm = this.removeEducationForm.bind(this);
    this.changeViewMode = this.changeViewMode.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.removeSkill = this.removeSkill.bind(this);
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
    this.setState((prevState) => ({
      ...prevState,
      education: [...obj],
    }));
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

  addSkill(e) {
    e.preventDefault();
    const value = formatValue(e.target.skills.value);
    const skills = this.state.skills.concat(value);
    this.setState(
      () => ({ skills }),
      () => {
        e.target.skills.value = '';
      }
    );
  }

  removeSkill(e) {
    const str = e.currentTarget.previousSibling.data;
    const skills = [...this.state.skills.filter((skill) => skill !== str)];
    this.setState(() => ({ skills }));
  }

  changeViewMode() {
    this.setState((prevState) => ({
      ...prevState,
      preview: !prevState.preview,
    }));
  }
  render() {
    const { preview } = this.state;
    return (
      <div>
        <button className="changeMode" onClick={this.changeViewMode}>
          {preview ? 'Edit' : 'Preview'}
        </button>
        {preview ? (
          <Preview cv={this.state} />
        ) : (
          <Form
            cv={this.state}
            onChangePersonal={this.handlePersonalChange}
            onChangeProfessional={this.handleProfessionalChange}
            onChangeEducation={this.handleEducationalChange}
            onAddProfession={this.addProfession}
            onAddEducation={this.addEducation}
            onRemoveProfession={this.removeProfessionalForm}
            onRemoveEducation={this.removeEducationForm}
            onAddSkill={this.addSkill}
            onRemoveSkill={this.removeSkill}
          />
        )}
      </div>
    );
  }
}
export default App;

const formatValue = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

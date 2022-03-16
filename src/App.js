import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Form from './components/form/Form';
import Preview from './components/preview/Preview';
import './styles/App.css';

const App = () => {
  const [state, setState] = useState({
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
  });
  const [preview] = useState(false);
  // const [errors, setErrors] = useState(false);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    const personal = {
      ...state.personal,
      [name]: value,
    };
    setState({ ...state, personal });
  };

  const handleEducationalChange = (e, id) => {
    const { name, value } = e.target;
    const obj = state.education.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setState((prevState) => ({
      ...prevState,
      education: [...obj],
    }));
  };
  const addEducation = (e) => {
    const obj = {
      id: uniqid(),
      school: '',
      degree: '',
      from: '',
      to: '',
    };
    const education = state.education.concat(obj);
    setState({ ...state, education });
  };
  const removeEducationForm = (e, id) => {
    e.preventDefault();
    const obj = [...state.education.filter((obj) => obj.id !== id)];
    setState((prevState) => ({
      ...prevState,
      education: [...obj],
    }));
  };

  const handleProfessionalChange = (e, id) => {
    const { name, value } = e.target;
    const obj = state.professional.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    setState((prevState) => ({
      ...prevState,
      professional: [...obj],
    }));
  };

  const addProfession = (e) => {
    const obj = {
      id: uniqid(),
      company: '',
      title: '',
      from: '',
      to: '',
    };
    const professional = state.professional.concat(obj);
    setState({ ...state, professional });
  };

  const removeProfessionalForm = (e, id) => {
    e.preventDefault();
    const obj = [...state.professional.filter((obj) => obj.id !== id)];
    setState((prevState) => ({
      ...prevState,
      professional: [...obj],
    }));
  };

  const addSkill = (e) => {
    e.preventDefault();
    const value = formatValue(e.target.skills.value);
    const skills = state.skills.concat(value);
    e.target.value = '';
    setState({ ...state, skills });
    e.target.skills.value = '';
  };

  const removeSkill = (e) => {
    const str = e.currentTarget.previousSibling.data;
    const skills = [...state.skills.filter((skill) => skill !== str)];
    setState(() => ({ ...state, skills }));
  };

  const changeViewMode = () => {
    if (!state.errors) {
      setState((prevState) => ({
        ...prevState,
        preview: !prevState.preview,
      }));
    } else {
      alert('Fill the fields as required');
    }
  };
  return (
    <div>
      <button className="changeMode" onClick={changeViewMode}>
        {preview ? 'Edit' : 'Preview'}
      </button>
      {preview ? (
        <Preview cv={state} />
      ) : (
        <Form
          cv={state}
          onChangePersonal={handlePersonalChange}
          onChangeProfessional={handleProfessionalChange}
          onChangeEducation={handleEducationalChange}
          onAddProfession={addProfession}
          onAddEducation={addEducation}
          onRemoveProfession={removeProfessionalForm}
          onRemoveEducation={removeEducationForm}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
        />
      )}
    </div>
  );
};

export default App;

const formatValue = (str) => {
  return str[0].toUpperCase() + str.substring(1);
};

import React, { useEffect, useState,useReducer } from 'react';
import AppState  from './components/utils/AppState';
import { formatValue } from './components/utils/utils';
import stateReducer from './components/utils/stateReducer';
import uniqid from 'uniqid';
import Form from './components/form/Form';
import Preview from './components/preview/Preview';
import './styles/App.css';

const App = () => {
  const [state, dispatch] = useReducer(stateReducer,AppState);
  const [preview,setPreview] = useState(false);
  useEffect(() => {
    console.log(state.skills);
  }, [state.skills]);

  const handlePersonalChange = (e) => {
    const {name,value}=e.target;
    dispatch({
      type:'personal_change',
      key:name,
      payload:{
        name,
        value
      }
    })
  };

  const handleEducationalChange = (e, id) => {
    const { name, value } = e.target;
    dispatch({
      type:'education_change',
      payload:{
        id,
        name,
        value
      }
    })
  };
  
  const addEducation = (e) => {
    const obj = {
      id: uniqid(),
      school: '',
      degree: '',
      from: '',
      to: '',
    };
    dispatch({
      type:'add_education_item',
      payload:{
        obj
      }
    })
  };

  const removeEducationForm = (e, id) => {
    e.preventDefault();
    const obj = state.education.filter((obj) => obj.id !== id);
    dispatch({
      type: 'remove_education_item',
      payload:{
        obj
      }
    })
  };

  const handleProfessionalChange = (e, id) => {
    const { name, value } = e.target;
    dispatch({
      type:'professional_change',
      payload:{
        id,
        name,
        value
      }
    })
  };

  const addProfession = (e) => {
    const obj = {
      id: uniqid(),
      company: '',
      title: '',
      from: '',
      to: '',
    };
    dispatch({
      type:'add_professional_item',
      payload:{
        obj
      }
    })
  };

  const removeProfessionalForm = (e, id) => {
    e.preventDefault();
    const obj = state.professional.filter((obj) => obj.id !== id)
    dispatch({
      type:'remove_professional_item',
      payload:{
        obj
      }
    })
  };

  const addSkill = (e) => {
    e.preventDefault();
    const value = formatValue(e.target.skills.value);
    const skills = state.skills.concat(value);
    dispatch({
      type:'add_skills',
      payload:{
        skills,
      }
    })
    e.target.skills.value=''
  };

  const removeSkill = (e) => {
    const str = e.currentTarget.previousSibling.data;
    const skills = state.skills.filter((skill) => skill !== str)
    dispatch({
      type:'remove_skills',
      payload:{
        skills,
      }
    })
  };

  // const changeViewMode = () => {
  //   if (!state.errors) {
  //     setState((prevState) => ({
  //       ...prevState,
  //       preview: !prevState.preview,
  //     }));
  //   } else {
  //     alert('Fill the fields as required');
  //   }
  // };
  return (
    <div>
      <button className="changeMode" onClick={()=>setPreview(!preview)}>
        {preview ? 'Edit' : 'Preview'}
      </button>
      {preview ? (
        <Preview cv={state} />
      ) : (
        <Form
          cv={state}
          onChangePersonal={handlePersonalChange}
          onChangeProfessional={handleProfessionalChange}
          onAddProfession={addProfession}
          onRemoveProfession={removeProfessionalForm}
          onChangeEducation={handleEducationalChange}
          onAddEducation={addEducation}
          onRemoveEducation={removeEducationForm}
          onAddSkill={addSkill}
          onRemoveSkill={removeSkill}
        />
      )}
    </div>
  );
};
export default App;


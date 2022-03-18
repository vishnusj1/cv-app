
export default function stateReducer(
  state,
  action
){
switch(action.type){
  case 'personal_change' : {
  const {name,value}=action.payload
    return {
      ...state,
      personal:{
        ...state.personal,
        [name]:value,
      }
    }
  }

  case 'education_change':{
    const {name,value,id}=action.payload;
    const obj = state.education.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    return {
      ...state,
      education:[...obj]
    }
  }

  case 'add_education_item':{
    const {obj}=action.payload
    return  {
      ...state,
      education:[
        ...state.education,
        obj
      ]
    }
  }

  case 'remove_education_item':{
    const {obj}=action.payload
    return  {
      ...state,
      education:[
        ...obj
      ]
    }
  }
  
  case 'professional_change':{
    const{id,name,value}=action.payload
    const obj = state.professional.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      } else {
        return item;
      }
    });
    return {
      ...state,
      professional:[
        ...obj
      ]
    }
  }

  case 'add_professional_item':{
    const {obj}=action.payload
    return  {
      ...state,
      professional:[
        ...state.professional,
        obj
      ]
    }
  }

  case 'remove_professional_item':{
    const {obj}=action.payload
    return  {
      ...state,
      professional:[
        ...obj
      ]
    }
  }

  case 'add_skills':{
    const {skills}=action.payload
    return{
      ...state,
      skills
    }
  }

  case 'remove_skills':{
    const {skills}=action.payload
    return{
      ...state,
      skills
    }
  }
  default : {
    throw Error('Unknown action: ' + action.type);
  }
}
}
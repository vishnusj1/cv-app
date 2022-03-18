import uniqid from 'uniqid';
 const AppState = {
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
}
export default AppState
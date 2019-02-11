import { SET_APP_NAME, SET_FORM_DATA } from '../TypeStore';

const initialState = {
  appName: '',
  formDataValue: {
    title: '',
    firstname: '',
    lastname: '',
    birthday: '',
    nationality: '',
    citizenid: [],
    gender: '',
    phone_number: '',
    phone_code: '',
    passport_no: '',
    expected_salary: ''
  }
};

export default (state = initialState, { type, action }) => {
  switch (type) {
    case SET_APP_NAME:
      return [...state, { appName: action.value }];
    case SET_FORM_DATA:
      return [...state, { formDataValue: action.value }];
    default:
      return state;
  }
};

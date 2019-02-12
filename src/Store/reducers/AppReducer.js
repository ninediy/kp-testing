import {
  SET_APP_NAME,
  SET_FORM_DATA,
  ADD_DATA_LISTS,
  SET_DATA_LISTS
} from '../TypeStore';

const initialState = {
  appName: '',
  formDataValue: {
    name_title: '',
    firstname: '',
    lastname: '',
    birthday: '',
    nationality: '',
    citizenid: [],
    gender: '',
    phone_number: '',
    phone_code: '66',
    passport_no: '',
    expected_salary: ''
  },
  dataStore: []
};

export default (state = initialState, { type, value }) => {
  switch (type) {
    case SET_APP_NAME:
      return { ...state, appName: value };
    case SET_FORM_DATA:
      return { ...state, formDataValue: value };
    case ADD_DATA_LISTS:
      return { ...state, dataStore: [...state.dataStore, value] };
    case SET_DATA_LISTS:
      return { ...state, dataStore: value };
    default:
      return state;
  }
};

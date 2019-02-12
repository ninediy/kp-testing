import {
  SET_APP_NAME,
  SET_FORM_DATA,
  ADD_DATA_LISTS,
  SET_DATA_LISTS,
  SET_DATA_INDEX
} from '../TypeStore';

const initialState = {
  appName: '',
  formDataValue: null,
  dataStore: [],
  dataIndex: null
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
    case SET_DATA_INDEX:
      return { ...state, dataIndex: value };
    default:
      return state;
  }
};

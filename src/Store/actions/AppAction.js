import {
  SET_APP_NAME,
  SET_FORM_DATA,
  ADD_DATA_LISTS,
  SET_DATA_LISTS,
  SET_DATA_INDEX
} from '../TypeStore';

export const setAppName = value => ({
  type: SET_APP_NAME,
  value: value
});

export const setFormData = value => ({
  type: SET_FORM_DATA,
  value: value
});

export const addDataList = value => ({
  type: ADD_DATA_LISTS,
  value: value
});

export const setDataList = value => ({
  type: SET_DATA_LISTS,
  value: value
});

export const setDataIndex = value => ({
  type: SET_DATA_INDEX,
  value: value
});

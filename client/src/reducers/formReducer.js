import {
  FORM_ERROR,
  FORM_SEND,
  PERSON_REMOVED,
  REMOVED_ERROR,
} from '../actions/types';

const initialState = {
  forms: [],
  form: null,
  loading: true,
  error: {},
};

/**
  * Controller to management an alerts
  * @param {Object} state - has informations about actuall state
  * @param {object} action - has infromation about req action
  * @return {Object} response infromation about state
  */
export default function(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case REMOVED_ERROR:
    case FORM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case FORM_SEND:
      return {
        ...state,
        forms: payload,
        loading: false,
      };
    case PERSON_REMOVED:
      return {
        ...state,
        person: payload,
        loading: false,
      };
    default:
      return state;
  }
}

import {SET_ALERT, REMOVE_ALERT} from '../actions/types';

/**
  * Controller to management an alerts
  * @param {string} state - has informations about actuall state
  * @param {object} action - has infromation about request
  * @return {Array} response infromation from controller
  */
export default function(state, action) {
  const {type, payload} = action;
  state = [];

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

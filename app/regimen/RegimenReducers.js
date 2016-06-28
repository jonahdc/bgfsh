import * as constants from './RegimenConstants'

export function observations(state = [], action) {
  switch (action.type) {
    case constants.ADD_OBSERVATION:
      return [
        {
          id: action.observation.id,
          title: action.observation.title,
          description: action.observation.description,
          dateTime: action.observation.dateTime
        }, ...state
      ];
    default:
      return state;
  }
}

export default function regimenApp(state = {}, action) {
  return {
    observations: observations(state.observations, action)
  };
}

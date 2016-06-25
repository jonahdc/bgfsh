import * as constants from './RegimenConstants'
//
// const initialState = {
//   observations: []
// }

function observations(state = [], action){
  switch(action.type){
    case constants.ADD_OBSERVATION:
      return [
          ...state,
          {
            title: action.observation.title,
            description: action.observation.description,
            datetime: action.observation.dateTime
          }
        ];
    default:
      return state;
  }
}

export default function regimenApp(state = {}, action){
  return {
    observations: observations(state.observations, action)
  };
}

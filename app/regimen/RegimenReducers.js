import * as constants from './RegimenConstants'


const initialState = {
  observations: []
}

export function observations(state = [], action){
  console.log('hello world');
  switch(action.type){
    case constants.ADD_OBSERVATION:
      return [

          {
            id: action.observation.id,
            title: action.observation.title,
            description: action.observation.description,
            datetime: action.observation.dateTime
          }, ...state
        ];
    default:
      return state;
  }
}

export default function regimenApp(state = {}, action){
  console.log('hello world');
  return {
    observations: observations(state.observations, action)
  };
}

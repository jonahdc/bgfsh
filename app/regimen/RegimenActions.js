import * as constants from './RegimenConstants'

export function addObservation(observation){
  return {
    type: constants.ADD_OBSERVATION,
    observation: observation
  }
}

import { combineReducers } from 'redux'
import { observations } from './RegimenReducers'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  form: formReducer,
  observations
});

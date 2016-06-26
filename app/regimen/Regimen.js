import React from 'react'
import ReactDOM from 'react-dom'
import { addObservation } from './RegimenActions'
import { connect } from 'react-redux'
import RegimenFooter from './RegimenFooter'
import RegimenForm from './RegimenForm'
import RegimenTimeline from './RegimenTimeline'
import * as helpers from './RegimenHelpers'
import { initialize } from 'redux-form'

export class Regimen extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.handlers = mapDispatchToProps(this.props.dispatch);
  }

  handleSubmit(data){
    let id = helpers.getNewID(this.props.observations);
    console.log(id);
    data.id = id;
    data.dateTime = 'the date time';
    this.props.dispatch(addObservation(data));
    this.props.dispatch( initialize('Regimen', {}));
  }

  render(){
    return (
      <main class="content-area">
        <div class="frame">
          <div class="container">
          <div class="preface">
            <h1 class="preface__title">Regimen</h1>
          </div>
          <div class="regimen-container">
            <div class="sidebar">
            <RegimenForm onSubmit={this.handleSubmit.bind(this)}/>
            </div>
            <div class="body">
            <RegimenTimeline data={this.props.observations}/>
            </div>
          </div>
          <RegimenFooter />

          </div>
        </div>

      </main>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
function mapDispatchToProps(dispatch){
  return {
    onSubmitClick: (observation) => {
        const b = {title: 'test', description:'descccc', id:'ID', dateTime: 'dateTime'};
        dispatch(addObservation(b));
    }
  }
}

function mapStateToProps(store) {

  return {
    observations: store.observations
  }
}

export default connect(mapStateToProps)(Regimen);

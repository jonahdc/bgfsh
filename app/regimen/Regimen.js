import React from 'react'
import ReactDOM from 'react-dom'
import { addObservation } from './RegimenActions'
import { connect } from 'react-redux'
import RegimenFooter from './RegimenFooter'
import RegimenForm from './RegimenForm'
import RegimenTimeline from './RegimenTimeline'
import * as helpers from './RegimenHelpers'
import { initialize } from 'redux-form'
import moment from 'moment'

export class Regimen extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.handlers = mapDispatchToProps(this.props.dispatch);
  }

  handleSubmit(data){
    let timeStamp = moment().unix();
    let id = helpers.getNewID(timeStamp);
    data.id = id;
    data.dateTime = timeStamp;
    this.props.dispatch(addObservation(data));
    this.props.dispatch( initialize('Regimen', {}));
  }

  render(){
    return (
      <main class="content-area">
        <div class="frame">
          <div class="container">
          <div class="preface">
            <h1 class="preface__title">Welcome to Sandbox</h1>
            <div class="preface__desc"><h3 class="preface__desc__head"></h3>
<h4>Here you'll find bits and snippets of design and/or codes fresh from my fiddling and exploration of tools, technologies and techniques.</h4>
              </div>
          </div>
          <div class="sandbox-feature">

          <div class="sandbox-feature__intro">
          <h3>Tracker</h3>
          <p>Done with React-Redux and a few other add-ons, the following functionality shows a portion of a tracker application under development.</p>
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
        </div>

      </main>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    onSubmitClick: (observation) => {
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

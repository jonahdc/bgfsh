import React from 'react'
import ReactDOM from 'react-dom'
import { addObservation } from './RegimenActions'
import { connect } from 'react-redux'

export class Regimen extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log("context", this.context);
    this.handlers = mapDispatchToProps(this.props.dispatch);
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
            <div class="widget">
            <h3>New Observation</h3>
            <form class="entry">
              <input type="text" name="title" class="entry__title" placeholder="Title" />
             <textarea name="desc" class="entry__desc" cols="40" rows="5" placeholder="Description"></textarea>
             <a href="javascript:void(0)" class="btn btn-primary" onClick={this.handlers.onSubmitClick}>Add</a>
              </form>
            </div>
            </div>
          </div>
          <div class="footer">
          <p>This project is still under development and the above is but a tiny bit of the application.</p>
          </div>

          </div>
        </div>

      </main>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
function mapDispatchToProps(dispatch){
  return {
    onSubmitClick: () => {
        const obs = {title: 'test', description: 'desc', dateTime: 'datetime'};
        console.log(dispatch(addObservation(obs)));


    }
  }
}

export default connect()(Regimen);

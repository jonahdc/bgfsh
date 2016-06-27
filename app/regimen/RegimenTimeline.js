import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import RegimenTimelineEntry from './RegimenTimelineEntry'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class RegimenTimeline extends React.Component {



render(){

  const timelineEntryList = this.props.data.map(function(entry){
        return (
      <RegimenTimelineEntry entry={entry} key={entry.id}/>
    )
    }
  )
  return (
    <div class="regimen-timeline">
      <h3 class="light-header">Timeline</h3>
      <div class="timeline-entries">
        <ReactCSSTransitionGroup transitionName="timeline-animation">
      { timelineEntryList }
    </ReactCSSTransitionGroup>
      </div>
    </div>
  );
}

}

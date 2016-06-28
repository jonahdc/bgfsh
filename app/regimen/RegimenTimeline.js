import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import RegimenTimelineEntry from './RegimenTimelineEntry'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import moment from 'moment'



export default class RegimenTimeline extends React.Component {
render(){
  var prevEntryDate = '';
  var isNewDay = true;
  const timelineEntryList = this.props.data.map(function(entry) {

        var currentEntryDate = moment.unix(entry.dateTime).format('YYYYMMDD');
        if (prevEntryDate.length > 0) {
          if (currentEntryDate !== prevEntryDate) {
            isNewDay = true;
          }
        }

        prevEntryDate = currentEntryDate;

          return (
          <RegimenTimelineEntry isNewDay={isNewDay} entry={entry} key={entry.id}/>

        )

    }
  )

  return (
    <div class="regimen-timeline">
      <h3 class="light-header">Timeline</h3>
      <div class="timeline-entries">
        <ReactCSSTransitionGroup transitionName="timeline-animation" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
      { timelineEntryList }
    </ReactCSSTransitionGroup>
      </div>
    </div>
  );
}

}

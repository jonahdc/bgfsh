import React from 'react'
import ReactDOM from 'react-dom'
import { getDisplayTime } from './RegimenHelpers'
import moment from 'moment'

export default class RegimenTimelineEntry extends React.Component {

  render() {
  let unixTimeStamp = moment.unix(this.props.entry.dateTime);
  let dateTime = unixTimeStamp.format('HH:mm');
  let date = unixTimeStamp.format('dd-MM-YYYY');
   return (
     <div>

     <div class="timeline-entry clearfix">
     <div class="timeline-entry__meta">

       <span class="timeline-entry__datetime">{ dateTime }</span>
       </div>
       <div class="timeline-entry__content">
         <h3 class="timeline-entry__title">
         { this.props.entry.title }
         </h3>
         <div class="timeline-entry__desc">
         <p>{ this.props.entry.description }</p>
         </div>
       </div>
     </div>
     </div>
   );
  }
}

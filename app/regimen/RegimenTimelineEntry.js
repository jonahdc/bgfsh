import React from 'react'
import ReactDOM from 'react-dom'

export default class RegimenTimelineEntry extends React.Component {
  render() {
   return (
     <div class="timeline-entry">
     <div class="timeline-entry__meta">

       <span class="timeline-entry__datetime">{ this.props.entry.dateTime }</span>
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
   );
  }
}
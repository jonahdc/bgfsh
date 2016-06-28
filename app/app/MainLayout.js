import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';
import Navbar from './Navbar';



export default class MainLayout extends React.Component{
  render() {
    return (
<div>
        <Header />

              <ReactCSSTransitionGroup
             component="div"
             transitionName="page"
             transitionEnterTimeout={500} transitionLeaveTimeout={500}
            >
             {React.cloneElement(this.props.children, {
               key: this.props.location.pathname
             })}
            </ReactCSSTransitionGroup>


        </div>
    );
  }


}

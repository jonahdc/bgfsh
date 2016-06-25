import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from './Header';
import Navbar from './Navbar';

require('./styles/transitions.scss')

export default class MainLayout extends React.Component{
  render() {
    return (
<div>
        <Header />

              <ReactCSSTransitionGroup
             component="div"
             transitionName="page"
            >
             {React.cloneElement(this.props.children, {
               key: this.props.location.pathname
             })}
            </ReactCSSTransitionGroup>


        </div>
    );
  }


}

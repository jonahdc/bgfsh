import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return(
      <nav class="navbar navbar-default">
  <div class="container">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">bgfsh : playground</a>
    </div>

    <div class="navbar-right collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><Link to="/" activeClassName="active">Home <span class="sr-only">(current)</span></Link></li>
        <li><Link to="/about" activeClassName="active">About</Link></li>
        <li><Link to="/Regimen" activeClassName="active">Regimen</Link></li>

      </ul>


    </div>
  </div>
</nav>
    );
  }
}

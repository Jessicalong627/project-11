import React, { Component } from 'react';
import Search from './Search';
//Main nav
import {
  NavLink,
  Route,
} from 'react-router-dom';

export default class Navigation extends Component {
  handleValueSearch(input) {
    this.props.changeSearchText(input);
  }

  render() {
    return (
      <nav className="main-nav">
        <ul>
          <li><NavLink to={`/Nature`} >Nature</NavLink></li>
          <li><NavLink to={`/NewYork`} >New York</NavLink></li>
          <li><NavLink to={`/Sunset`} >Sunset</NavLink></li>
          <li><NavLink to={`/search`} >Search</NavLink></li>
          <Route  path='/search' render={ () => <Search handleValueSearch={this.handleValueSearch.bind(this)} />}/>
        </ul>
      </nav>
    );
  }
}

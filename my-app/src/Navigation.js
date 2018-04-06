import React from 'react';
import { NavLink } from 'react-router-dom';
// Nav links
const Navigation = props => {
  return(
  <nav className="main-nav">
     <ul>
       <li><NavLink onClick={props.NavHandle} to ='/Nature'>Nature</NavLink></li>
       <li><NavLink onClick={props.NavHandle} to='/NewYork'>New York</NavLink></li>
       <li><NavLink onClick={props.NavHandle} to='/Sunset'>Sunset</NavLink></li>
      <li><NavLink onClick={props.NavHandle} to='/Search'>Search</NavLink></li>
     </ul>
   </nav>
)
}

export default Navigation;

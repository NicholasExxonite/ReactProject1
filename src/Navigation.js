import React from 'react';
import './Navigation.css';
// import './App.css';
const sections = ['Home', 'About', 'Services', 'Contact'];
const navigationLinks = sections.map((item) => {
  return (
    <li><a href={'#' + item}>{item}</a></li>
  )
});
class Navigation extends React.Component{
  render(){

    return(
      <nav>
        <h2 className="logo">{this.props.titleLogo}</h2>
        <ul>
          {navigationLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;

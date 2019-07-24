import React, {component} from 'react';
import './Navigation.css';
// import './App.css';

class Navigation extends React.Component{
  render(){
    const sections = ['Home', 'About', 'Services', 'Contact'];
    const navigationLinks = sections.map((item) => {
      return (
        <li><a href={'#' + item}>{item}</a></li>
      )
    });

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

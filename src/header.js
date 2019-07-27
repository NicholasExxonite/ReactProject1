import React from 'react';
import Image from './img/headerImg.jpg';

import './header.css';
const headerStyle = {
  backgroundImage: `url( ${Image} )`,
  height:'80vh',
  backgroundSize: 'cover'
};
class Header extends React.Component{
  render(){
    return(
      <header style={headerStyle}>
        <h1>{this.props.title}</h1>
        <a href="#">{this.props.button}</a>
      </header>
    );
  }
};

export default Header;

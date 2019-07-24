import React from 'react';
import image from url("http://bighdwalls.com/wp-content/uploads/mountain-river-quote-background.jpg");
var myStyles = {
  backgroundImage: 'url(' + {image} +')',
  height:'300px',
  backgroundSize: 'cover'
}
class Header extends React.Component{
  render(){
    // const image = 'http://bighdwalls.com/wp-content/uploads/mountain-river-quote-background.jpg';
    return(
      <header style={myStyles}>
      </header>
    );
  }
};

export default Header;

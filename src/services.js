import React from 'react';
import './services.css';

class Services extends React.Component{
  render(){
    return(
      <div className="services">
      <h3>services</h3>
      <h2>What We Offer</h2>

        <div className="row">
          <Icons icon={iconObj[0].icon} title={iconObj[0].title} description={iconObj[0].description}/>
          <Icons icon={iconObj[1].icon} title={iconObj[1].title} description={iconObj[1].description}/>
          <Icons icon={iconObj[2].icon} title={iconObj[2].title} description={iconObj[2].description}/>
          <Icons icon={iconObj[3].icon} title={iconObj[3].title} description={iconObj[3].description}/>

        </div>
      </div>
    );
  }
}

const iconObj = [
{
  icon: <i className="fas fa-phone"></i>,
  title: 'Responsive',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli..'
},
{
  icon: <i className="fas fa-pencil-alt"></i>,
  title: 'Redesigned',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli..'
},
{
  icon: <i className="far fa-thumbs-up"></i>,
  title: 'Favourites',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli..'
},
{
  icon: <i className="fas fa-question"></i>,
  title: 'Questions',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing eli..'
}
];
class Icons extends React.Component{
  render(){
    return(
      <div>
        <span>
          {this.props.icon}
        </span>
        <h4>{this.props.title}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Services;


// <div className= "row">
//   <div>
//     <span><i className="fas fa-phone"></i></span>
//     <h4>Responsive</h4>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
//   </div>
//   <div>
//     <span><i className="fas fa-pencil-alt"></i></span>
//     <h4>Redesigned</h4>
//     <p>Sed ut perspiciatis unde omnis</p>
//   </div>
//   <div>
//     <span><i class="far fa-thumbs-up"></i></span>
//     <h4>Favourites</h4>
//     <p>Excepteur sint occaecat cupidatat non proident</p>
//   </div>
//   <div>
//     <span><i class="fas fa-question"></i></span>
//     <h4>Questions</h4>
//     <p>Nemo enim ipsam voluptatem quia voluptas</p>
//   </div>
//  </div>

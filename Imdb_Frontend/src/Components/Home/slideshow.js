import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './style.css';  
export class SlickDemo extends Component {  
    render() {  
        var images = [    
            { img: 'Images/slide1.jpeg' },    
            { img: 'Images/slide2.jpeg' },    
            { img: 'Images/slide3.jpeg' },    
            { img: 'Images/slide4.jpeg' },    
            { img: 'Images/slide5.jpeg' },    
            { img: 'Images/slide6.jpeg' },
            { img: 'Images/slide7.jpeg' },
            { img: 'Images/slide8.jpeg' },
            { img: 'Images/slide9.jpeg' },    
          ];   
    var imgSlides = () =>  
    images.map(num => (  
      <div className="imgpad">  
          <img className="imgdetails" src= {num.img} width="100%"/>    
      </div>  
    ));  
  return (  
    <div className="App">  
         <div class='container-fluid'>        
            <div className="row title" style={{marginBottom: "20px"}} >              
            </div>    
            </div>  
      <Slider  
    dots={true}  
        slidesToShow={2}  
        slidesToScroll={2}  
        autoplay={true}  
        arrows={true}  
        autoplaySpeed={3000}>{imgSlides()}</Slider>  
    </div>  
  );  
}  
}  
export default SlickDemo;  
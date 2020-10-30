import React from "react";
import { connect } from "react-redux";
import './style.css'
import SlickDemo from './slideshow'

const Home = (props) => {
 
  console.log("HOME history props", props);
  return( 
    <div className="App"> 
  <h1 className="title">Welcome {props.user}</h1>;
  
    <SlickDemo/>  
    </div>  
  
    );
  }


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Home);
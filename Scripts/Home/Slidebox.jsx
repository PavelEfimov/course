import React, { Component } from 'react';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import '../../Styles/Home.css';

import first from '../../Images/1.jpg';
import second from '../../Images/2.jpg';
import third from '../../Images/3.jpg';

class Slidebox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 1,
      isLeftArrowEnable: false,
      isRightArrowEnable: true
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {

    this.setState({ currentSlide: this.state.currentSlide - 1 });
    if( this.state.currentSlide <= 2) {
       this.setState({isLeftArrowEnable: !this.state.isLeftArrowEnable});
     }
     if( this.state.currentSlide <= 3) {
        this.setState({isRightArrowEnable: true});
        return
      }
  }

  nextSlide() {
      this.setState({ currentSlide: this.state.currentSlide + 1});
    if( this.state.currentSlide >=2) {
       this.setState({isRightArrowEnable: !this.state.isRightArrowEnable});
       return
     }
     if( this.state.currentSlide >=1) {
        this.setState({isLeftArrowEnable: true});
      }
}

  render(){
    return(
      <div className="home-slidebox">

          {this.state.currentSlide === 1 ? <Slide image = {first}/>: null }
          {this.state.currentSlide === 2 ? <Slide image = {second}/>: null }
          {this.state.currentSlide === 3 ? <Slide image = {third}/>: null }
          {this.state.isLeftArrowEnable ?  <LeftArrow previousSlide = {this.previousSlide} />: null}
          {this.state.isRightArrowEnable ?  <RightArrow nextSlide = {this.nextSlide} />: null}
      </div>
    );
 }
}

export default Slidebox;

import React, { Component } from 'react';

import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import '../../Styles/Home.css';

import first from '../../Images/1.jpg';
import second from '../../Images/2.jpg';
import third from '../../Images/3.jpg';
import fourth from '../../Images/4.jpg';
import fifth from '../../Images/5.jpg';

const images = [first, second, third, fourth, fifth];

class Slidebox extends Component {
  constructor() {
    super();
    this.state = {
      leftArrow: false,
      rightArrow: true,
      current: 0
    }
    //n = length(images) - 1: (4)
    this.previous = () => {
      const { current, leftArrow , rightArrow } = this.state;
      this.setState({ current: current - 1 });
      current == 1 ? this.setState({ leftArrow: false }) : null; //n == len(n)- len(n) + 1
      current <= images.length - 1 ? this.setState({ rightArrow: true }) : null; // <= n
    }

    this.next = () => {
      const { current, leftArrow , rightArrow } = this.state;
      this.setState({ current: current + 1 });
      current == images.length - 2 ? this.setState({ rightArrow: false }) : null; //n == n-1
      current >= 0 ? this.setState({ leftArrow: true }) : null; // n >= 0
    }
  }

  render() {
    const { current, leftArrow, rightArrow } = this.state;
    return (
      <div className="home-slidebox">
        { images.map( (item, index ) => index === current ? <Slide key={index} image = {item} />: null ) }
        { leftArrow ? <LeftArrow previous = {this.previous} />: null }
        { rightArrow ? <RightArrow next = {this.next} />: null }
      </div>
    );
  }
}

export default Slidebox;

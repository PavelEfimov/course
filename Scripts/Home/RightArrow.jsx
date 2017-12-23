import React from 'react';

import '../../Styles/Home.css';

const RightArrow = (props) => {
  return(
    <div className="arrow-right-image" onClick={props.nextSlide}>

    </div>
  )
}

export default RightArrow;

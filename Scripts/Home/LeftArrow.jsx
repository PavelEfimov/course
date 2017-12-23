import React from 'react';

import '../../Styles/Home.css';

const LeftArrow = (props) => {
  return(
    <div className="arrow-left-image" onClick={props.previousSlide}>

    </div>
  )
}

export default LeftArrow;

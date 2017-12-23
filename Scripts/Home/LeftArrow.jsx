import React from 'react';

import '../../Styles/Home.css';

const LeftArrow = ({ previous }) => (
    <div className="arrow-left-image" onClick={ previous }></div>
  );

export default LeftArrow;

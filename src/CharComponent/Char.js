import React from 'react';

import './Char.css';

const char = props => {
    return <p className="box" onClick={props.click}>{props.char}</p>;
}

export default char;
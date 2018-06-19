import React from 'react';

const validation = props => {

    if (props.wordLength > 10) {
        return (
            <p>Text too long!</p>
        )
    } else if (props.wordLength < 5) {
        return (
            <p>Text too short!</p>
        )
    } else {
        return (
            <p>Text long enough!</p>
        )
    }
}

export default validation;
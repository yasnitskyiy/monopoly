import React from 'react';
import './Input.scss'
const TextError = (props) => {
    return (
        <div className='error'>
            {props.children}
        </div>
    );
};

export default TextError;
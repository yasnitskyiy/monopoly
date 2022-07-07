import React from 'react';
import './Input.Module.scss'
const TextError = (props) => {
    return (
        <div className='error'>
            {props.children}
        </div>
    );
};

export default TextError;
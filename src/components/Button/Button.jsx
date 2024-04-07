import React from "react";
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} class='button' className={'button' + props.className}/>
    );
};

export default Button;
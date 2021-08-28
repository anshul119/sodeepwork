import React from 'react';
import './button.scss';

export default function (props) {
    return (
        <div className="button">
            <button onClick={props.action}>{props.text}</button>
        </div>
    );
}

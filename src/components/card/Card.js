import React from 'react';
import Button from '../button/Button';
import './card.scss';

export default function (props) {
    const handleClickOnProject = () => {
        window.location.href = '/project';
    };
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.thumbnail} />
            </div>
            <h3 className="card-heading">{props.projectName}</h3>
            <p className="card-description">{props.description}</p>
            <Button action={handleClickOnProject} text="view project"></Button>
        </div>
    );
}

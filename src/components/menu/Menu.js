import React from 'react';
import Icon from '../icon/Icon';
import close from '../../assets/icons/Close.svg';
import grid from '../../assets/images/grid.svg';
import './menu.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
    }

    render() {
        return (
            <div className={`menu ${this.props.isOpen ? 'open' : 'close'}`} style={{ backgroundImage: `url(${grid})` }}>
                <div className="wrapper">
                    <div className="icon-close" onClick={this.props.toggleMenu}>
                        <Icon name={close}></Icon>
                    </div>
                    <ul className="nav">
                        <li className="nav-item"><p className="name">About</p></li>
                        <li className="nav-item"><p className="name">Work</p></li>
                        <li className="nav-item"><p className="name">Constructs</p></li>
                        <li className="nav-item"><p className="name">Contact</p></li>
                        <li className="nav-item"><p className="name">Words</p></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;

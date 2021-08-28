import React from 'react';
import Icon from '../icon/Icon';
import logo from '../../assets/logo-large.svg';
import hamburger from '../../assets/icons/hamburger.svg';
import './header.scss';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="wrapper">
                    <div className="header-container">
                        <img className="logo" src={logo}></img>
                        <div className="menu-icon">
                            <Icon name={hamburger}></Icon>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;

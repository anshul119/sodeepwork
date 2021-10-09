import React from 'react';
import Icon from '../icon/Icon';
import Menu from '../menu/Menu';
import logo from '../../assets/logo-large.svg';
import hamburger from '../../assets/icons/hamburger.svg';
import './header.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleMenu = () => {
        if (this.state.isOpen) {
            document.body.classList.remove('menu-open');
            this.setState({isOpen: false})
        } else {
            document.body.classList.add('menu-open');
            this.setState({isOpen:true})
        }
    }

    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <img className="logo" src={logo}></img>
                    <div className="menu-icon" onClick={this.toggleMenu}>
                        <Icon name={hamburger}></Icon>
                    </div>
                </div>
                <Menu isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
            </header>
        );
    }
}

export default Header;

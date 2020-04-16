import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo.png';

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <img src={Logo} alt="Logo" className="header__logo" />
                <p className="header__p">Answer a few simple questions to get your estimate.</p>
            <button className="header__btn"><Link to="/form">Get Started</Link></button>
        </div>
        );
    }
}

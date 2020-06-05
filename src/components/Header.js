import React from 'react';
import { Link } from 'react-router-dom';

import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <img src={Logo1} alt="Logo" className="header__logo--large" />
                <img src={Logo2} alt="Logo" className="header__logo--small" />
                <p className="header__p">Answer a few simple questions to get your estimate.</p>
            <button className="header__btn"><Link to="/form">Get Started</Link></button>
        </div>
        );
    }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import Payments from './Payments';

class Header extends Component {
    componentDidMount() {
        $('.button-collapse').sideNav({ closeOnClick: true });
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        const logoLink = (this.props.auth) ? '/surveys' : '/';

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={logoLink} className="brand-logo">Emaily</Link>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        {this.renderContent()}
                    </ul>
                </div>
          </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return{ auth };
}

export default connect(mapStateToProps)(Header);
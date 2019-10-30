import React from 'react';

const Header = () => {
    return (
        <div className="ui large borderless fluid menu">
            <div className="ui container">
                <div className="header item">
                    City Tour
                </div>
                <div className="right menu">
                    <a className="item">
                        Tours
                    </a>
                    <div className="ui simple dropdown item">
                        Locations
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            <div className="item">New York</div>
                            <div className="item">Paris</div>
                            <div className="item">London</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;